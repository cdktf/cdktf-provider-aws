# `ssmAssociation` Submodule <a name="`ssmAssociation` Submodule" id="@cdktf/provider-aws.ssmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmAssociation <a name="SsmAssociation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_association aws_ssm_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

ssmassociation.NewSsmAssociation(scope Construct, id *string, config SsmAssociationConfig) SsmAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig">SsmAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig">SsmAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation">PutOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval">ResetApplyOnlyAtCronInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetAssociationName">ResetAssociationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName">ResetAutomationTargetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetComplianceSeverity">ResetComplianceSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetMaxErrors">ResetMaxErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds">ResetWaitForSuccessTimeoutSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOutputLocation` <a name="PutOutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation"></a>

```go
func PutOutputLocation(value SsmAssociationOutputLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplyOnlyAtCronInterval` <a name="ResetApplyOnlyAtCronInterval" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval"></a>

```go
func ResetApplyOnlyAtCronInterval()
```

##### `ResetAssociationName` <a name="ResetAssociationName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetAssociationName"></a>

```go
func ResetAssociationName()
```

##### `ResetAutomationTargetParameterName` <a name="ResetAutomationTargetParameterName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName"></a>

```go
func ResetAutomationTargetParameterName()
```

##### `ResetComplianceSeverity` <a name="ResetComplianceSeverity" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetComplianceSeverity"></a>

```go
func ResetComplianceSeverity()
```

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetDocumentVersion"></a>

```go
func ResetDocumentVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetMaxConcurrency"></a>

```go
func ResetMaxConcurrency()
```

##### `ResetMaxErrors` <a name="ResetMaxErrors" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetMaxErrors"></a>

```go
func ResetMaxErrors()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetOutputLocation"></a>

```go
func ResetOutputLocation()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetTargets"></a>

```go
func ResetTargets()
```

##### `ResetWaitForSuccessTimeoutSeconds` <a name="ResetWaitForSuccessTimeoutSeconds" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds"></a>

```go
func ResetWaitForSuccessTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

ssmassociation.SsmAssociation_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

ssmassociation.SsmAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

ssmassociation.SsmAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput">ApplyOnlyAtCronIntervalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationNameInput">AssociationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput">AutomationTargetParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverityInput">ComplianceSeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.documentVersionInput">DocumentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxErrorsInput">MaxErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.outputLocationInput">OutputLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput">WaitForSuccessTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationName">AssociationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterName">AutomationTargetParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverity">ComplianceSeverity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrency">MaxConcurrency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxErrors">MaxErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds">WaitForSuccessTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.outputLocation"></a>

```go
func OutputLocation() SsmAssociationOutputLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.targets"></a>

```go
func Targets() SsmAssociationTargetsList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a>

---

##### `ApplyOnlyAtCronIntervalInput`<sup>Optional</sup> <a name="ApplyOnlyAtCronIntervalInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput"></a>

```go
func ApplyOnlyAtCronIntervalInput() interface{}
```

- *Type:* interface{}

---

##### `AssociationNameInput`<sup>Optional</sup> <a name="AssociationNameInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationNameInput"></a>

```go
func AssociationNameInput() *string
```

- *Type:* *string

---

##### `AutomationTargetParameterNameInput`<sup>Optional</sup> <a name="AutomationTargetParameterNameInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput"></a>

```go
func AutomationTargetParameterNameInput() *string
```

- *Type:* *string

---

##### `ComplianceSeverityInput`<sup>Optional</sup> <a name="ComplianceSeverityInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverityInput"></a>

```go
func ComplianceSeverityInput() *string
```

- *Type:* *string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.documentVersionInput"></a>

```go
func DocumentVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrencyInput"></a>

```go
func MaxConcurrencyInput() *string
```

- *Type:* *string

---

##### `MaxErrorsInput`<sup>Optional</sup> <a name="MaxErrorsInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxErrorsInput"></a>

```go
func MaxErrorsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.outputLocationInput"></a>

```go
func OutputLocationInput() SsmAssociationOutputLocation
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForSuccessTimeoutSecondsInput`<sup>Optional</sup> <a name="WaitForSuccessTimeoutSecondsInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput"></a>

```go
func WaitForSuccessTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `ApplyOnlyAtCronInterval`<sup>Required</sup> <a name="ApplyOnlyAtCronInterval" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval"></a>

```go
func ApplyOnlyAtCronInterval() interface{}
```

- *Type:* interface{}

---

##### `AssociationName`<sup>Required</sup> <a name="AssociationName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationName"></a>

```go
func AssociationName() *string
```

- *Type:* *string

---

##### `AutomationTargetParameterName`<sup>Required</sup> <a name="AutomationTargetParameterName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterName"></a>

```go
func AutomationTargetParameterName() *string
```

- *Type:* *string

---

##### `ComplianceSeverity`<sup>Required</sup> <a name="ComplianceSeverity" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverity"></a>

```go
func ComplianceSeverity() *string
```

- *Type:* *string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.documentVersion"></a>

```go
func DocumentVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrency"></a>

```go
func MaxConcurrency() *string
```

- *Type:* *string

---

##### `MaxErrors`<sup>Required</sup> <a name="MaxErrors" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxErrors"></a>

```go
func MaxErrors() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `WaitForSuccessTimeoutSeconds`<sup>Required</sup> <a name="WaitForSuccessTimeoutSeconds" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds"></a>

```go
func WaitForSuccessTimeoutSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmAssociationConfig <a name="SsmAssociationConfig" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

&ssmassociation.SsmAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ApplyOnlyAtCronInterval: interface{},
	AssociationName: *string,
	AutomationTargetParameterName: *string,
	ComplianceSeverity: *string,
	DocumentVersion: *string,
	Id: *string,
	InstanceId: *string,
	MaxConcurrency: *string,
	MaxErrors: *string,
	OutputLocation: github.com/cdktf/cdktf-provider-aws-go/aws.ssmAssociation.SsmAssociationOutputLocation,
	Parameters: *map[string]*string,
	ScheduleExpression: *string,
	Targets: interface{},
	WaitForSuccessTimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#name SsmAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.associationName">AssociationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#association_name SsmAssociation#association_name}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName">AutomationTargetParameterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.complianceSeverity">ComplianceSeverity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#compliance_severity SsmAssociation#compliance_severity}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#document_version SsmAssociation#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#id SsmAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#instance_id SsmAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#max_concurrency SsmAssociation#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxErrors">MaxErrors</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#max_errors SsmAssociation#max_errors}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | output_location block. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#parameters SsmAssociation#parameters}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#schedule_expression SsmAssociation#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.targets">Targets</a></code> | <code>interface{}</code> | targets block. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds">WaitForSuccessTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#name SsmAssociation#name}.

---

##### `ApplyOnlyAtCronInterval`<sup>Optional</sup> <a name="ApplyOnlyAtCronInterval" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval"></a>

```go
ApplyOnlyAtCronInterval interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.

---

##### `AssociationName`<sup>Optional</sup> <a name="AssociationName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.associationName"></a>

```go
AssociationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#association_name SsmAssociation#association_name}.

---

##### `AutomationTargetParameterName`<sup>Optional</sup> <a name="AutomationTargetParameterName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName"></a>

```go
AutomationTargetParameterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.

---

##### `ComplianceSeverity`<sup>Optional</sup> <a name="ComplianceSeverity" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.complianceSeverity"></a>

```go
ComplianceSeverity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#compliance_severity SsmAssociation#compliance_severity}.

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.documentVersion"></a>

```go
DocumentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#document_version SsmAssociation#document_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#id SsmAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#instance_id SsmAssociation#instance_id}.

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxConcurrency"></a>

```go
MaxConcurrency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#max_concurrency SsmAssociation#max_concurrency}.

---

##### `MaxErrors`<sup>Optional</sup> <a name="MaxErrors" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxErrors"></a>

```go
MaxErrors *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#max_errors SsmAssociation#max_errors}.

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.outputLocation"></a>

```go
OutputLocation SsmAssociationOutputLocation
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#output_location SsmAssociation#output_location}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#parameters SsmAssociation#parameters}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#schedule_expression SsmAssociation#schedule_expression}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#targets SsmAssociation#targets}

---

##### `WaitForSuccessTimeoutSeconds`<sup>Optional</sup> <a name="WaitForSuccessTimeoutSeconds" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds"></a>

```go
WaitForSuccessTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}.

---

### SsmAssociationOutputLocation <a name="SsmAssociationOutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

&ssmassociation.SsmAssociationOutputLocation {
	S3BucketName: *string,
	S3KeyPrefix: *string,
	S3Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_bucket_name SsmAssociation#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_key_prefix SsmAssociation#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3Region">S3Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_region SsmAssociation#s3_region}. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_bucket_name SsmAssociation#s3_bucket_name}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_key_prefix SsmAssociation#s3_key_prefix}.

---

##### `S3Region`<sup>Optional</sup> <a name="S3Region" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3Region"></a>

```go
S3Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_region SsmAssociation#s3_region}.

---

### SsmAssociationTargets <a name="SsmAssociationTargets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

&ssmassociation.SsmAssociationTargets {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#key SsmAssociation#key}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#values SsmAssociation#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#key SsmAssociation#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#values SsmAssociation#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmAssociationOutputLocationOutputReference <a name="SsmAssociationOutputLocationOutputReference" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

ssmassociation.NewSsmAssociationOutputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmAssociationOutputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Region">ResetS3Region</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```

##### `ResetS3Region` <a name="ResetS3Region" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Region"></a>

```go
func ResetS3Region()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3RegionInput">S3RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Region">S3Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3RegionInput"></a>

```go
func S3RegionInput() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Region"></a>

```go
func S3Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmAssociationOutputLocation
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---


### SsmAssociationTargetsList <a name="SsmAssociationTargetsList" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

ssmassociation.NewSsmAssociationTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmAssociationTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.get"></a>

```go
func Get(index *f64) SsmAssociationTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmAssociationTargetsOutputReference <a name="SsmAssociationTargetsOutputReference" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmassociation"

ssmassociation.NewSsmAssociationTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmAssociationTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



