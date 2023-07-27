# `aws_ssmincidents_response_plan`

Refer to the Terraform Registory for docs: [`aws_ssmincidents_response_plan`](https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan).

# `ssmincidentsResponsePlan` Submodule <a name="`ssmincidentsResponsePlan` Submodule" id="@cdktf/provider-aws.ssmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsResponsePlan <a name="SsmincidentsResponsePlan" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlan(scope Construct, id *string, config SsmincidentsResponsePlanConfig) SsmincidentsResponsePlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig">SsmincidentsResponsePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig">SsmincidentsResponsePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate">PutIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration">PutIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel">ResetChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements">ResetEngagements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegration">ResetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction"></a>

```go
func PutAction(value SsmincidentsResponsePlanAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

---

##### `PutIncidentTemplate` <a name="PutIncidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate"></a>

```go
func PutIncidentTemplate(value SsmincidentsResponsePlanIncidentTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `PutIntegration` <a name="PutIntegration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration"></a>

```go
func PutIntegration(value SsmincidentsResponsePlanIntegration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetAction"></a>

```go
func ResetAction()
```

##### `ResetChatChannel` <a name="ResetChatChannel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel"></a>

```go
func ResetChatChannel()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEngagements` <a name="ResetEngagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements"></a>

```go
func ResetEngagements()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegration` <a name="ResetIntegration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegration"></a>

```go
func ResetIntegration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.SsmincidentsResponsePlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.SsmincidentsResponsePlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.SsmincidentsResponsePlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference">SsmincidentsResponsePlanActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate">IncidentTemplate</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integration">Integration</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference">SsmincidentsResponsePlanIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput">ChatChannelInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput">EngagementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput">IncidentTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationInput">IntegrationInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel">ChatChannel</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements">Engagements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.action"></a>

```go
func Action() SsmincidentsResponsePlanActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference">SsmincidentsResponsePlanActionOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IncidentTemplate`<sup>Required</sup> <a name="IncidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate"></a>

```go
func IncidentTemplate() SsmincidentsResponsePlanIncidentTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integration"></a>

```go
func Integration() SsmincidentsResponsePlanIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference">SsmincidentsResponsePlanIntegrationOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionInput"></a>

```go
func ActionInput() SsmincidentsResponsePlanAction
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

---

##### `ChatChannelInput`<sup>Optional</sup> <a name="ChatChannelInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput"></a>

```go
func ChatChannelInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EngagementsInput`<sup>Optional</sup> <a name="EngagementsInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput"></a>

```go
func EngagementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncidentTemplateInput`<sup>Optional</sup> <a name="IncidentTemplateInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput"></a>

```go
func IncidentTemplateInput() SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `IntegrationInput`<sup>Optional</sup> <a name="IntegrationInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationInput"></a>

```go
func IntegrationInput() SsmincidentsResponsePlanIntegration
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ChatChannel`<sup>Required</sup> <a name="ChatChannel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel"></a>

```go
func ChatChannel() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Engagements`<sup>Required</sup> <a name="Engagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements"></a>

```go
func Engagements() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsResponsePlanAction <a name="SsmincidentsResponsePlanAction" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanAction {
	SsmAutomation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.property.ssmAutomation">SsmAutomation</a></code> | <code>interface{}</code> | ssm_automation block. |

---

##### `SsmAutomation`<sup>Optional</sup> <a name="SsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction.property.ssmAutomation"></a>

```go
SsmAutomation interface{}
```

- *Type:* interface{}

ssm_automation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}

---

### SsmincidentsResponsePlanActionSsmAutomation <a name="SsmincidentsResponsePlanActionSsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanActionSsmAutomation {
	DocumentName: *string,
	RoleArn: *string,
	DocumentVersion: *string,
	DynamicParameters: *map[string]*string,
	Parameter: interface{},
	TargetAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentName">DocumentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.dynamicParameters">DynamicParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.targetAccount">TargetAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}. |

---

##### `DocumentName`<sup>Required</sup> <a name="DocumentName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentName"></a>

```go
DocumentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}.

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.documentVersion"></a>

```go
DocumentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}.

---

##### `DynamicParameters`<sup>Optional</sup> <a name="DynamicParameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.dynamicParameters"></a>

```go
DynamicParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#parameter SsmincidentsResponsePlan#parameter}

---

##### `TargetAccount`<sup>Optional</sup> <a name="TargetAccount" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomation.property.targetAccount"></a>

```go
TargetAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}.

---

### SsmincidentsResponsePlanActionSsmAutomationParameter <a name="SsmincidentsResponsePlanActionSsmAutomationParameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanActionSsmAutomationParameter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}.

---

### SsmincidentsResponsePlanConfig <a name="SsmincidentsResponsePlanConfig" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IncidentTemplate: github.com/cdktf/cdktf-provider-aws-go/aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate,
	Name: *string,
	Action: github.com/cdktf/cdktf-provider-aws-go/aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction,
	ChatChannel: *[]*string,
	DisplayName: *string,
	Engagements: *[]*string,
	Id: *string,
	Integration: github.com/cdktf/cdktf-provider-aws-go/aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate">IncidentTemplate</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | incident_template block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel">ChatChannel</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements">Engagements</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integration">Integration</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | integration block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IncidentTemplate`<sup>Required</sup> <a name="IncidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate"></a>

```go
IncidentTemplate SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

incident_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.action"></a>

```go
Action SsmincidentsResponsePlanAction
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#action SsmincidentsResponsePlan#action}

---

##### `ChatChannel`<sup>Optional</sup> <a name="ChatChannel" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel"></a>

```go
ChatChannel *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}.

---

##### `Engagements`<sup>Optional</sup> <a name="Engagements" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements"></a>

```go
Engagements *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Integration`<sup>Optional</sup> <a name="Integration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integration"></a>

```go
Integration SsmincidentsResponsePlanIntegration
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#integration SsmincidentsResponsePlan#integration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}.

---

### SsmincidentsResponsePlanIncidentTemplate <a name="SsmincidentsResponsePlanIncidentTemplate" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIncidentTemplate {
	Impact: *f64,
	Title: *string,
	DedupeString: *string,
	IncidentTags: *map[string]*string,
	NotificationTarget: interface{},
	Summary: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact">Impact</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString">DedupeString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags">IncidentTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTarget">NotificationTarget</a></code> | <code>interface{}</code> | notification_target block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}. |

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact"></a>

```go
Impact *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}.

---

##### `DedupeString`<sup>Optional</sup> <a name="DedupeString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString"></a>

```go
DedupeString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}.

---

##### `IncidentTags`<sup>Optional</sup> <a name="IncidentTags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags"></a>

```go
IncidentTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}.

---

##### `NotificationTarget`<sup>Optional</sup> <a name="NotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTarget"></a>

```go
NotificationTarget interface{}
```

- *Type:* interface{}

notification_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#notification_target SsmincidentsResponsePlan#notification_target}

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}.

---

### SsmincidentsResponsePlanIncidentTemplateNotificationTarget <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget {
	SnsTopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}. |

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTarget.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}.

---

### SsmincidentsResponsePlanIntegration <a name="SsmincidentsResponsePlanIntegration" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIntegration {
	Pagerduty: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.property.pagerduty">Pagerduty</a></code> | <code>interface{}</code> | pagerduty block. |

---

##### `Pagerduty`<sup>Optional</sup> <a name="Pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration.property.pagerduty"></a>

```go
Pagerduty interface{}
```

- *Type:* interface{}

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#pagerduty SsmincidentsResponsePlan#pagerduty}

---

### SsmincidentsResponsePlanIntegrationPagerduty <a name="SsmincidentsResponsePlanIntegrationPagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIntegrationPagerduty {
	Name: *string,
	SecretId: *string,
	ServiceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.serviceId">ServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}.

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerduty.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsResponsePlanActionOutputReference <a name="SsmincidentsResponsePlanActionOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation">PutSsmAutomation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resetSsmAutomation">ResetSsmAutomation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsmAutomation` <a name="PutSsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation"></a>

```go
func PutSsmAutomation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.putSsmAutomation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSsmAutomation` <a name="ResetSsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.resetSsmAutomation"></a>

```go
func ResetSsmAutomation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomation">SsmAutomation</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList">SsmincidentsResponsePlanActionSsmAutomationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomationInput">SsmAutomationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SsmAutomation`<sup>Required</sup> <a name="SsmAutomation" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomation"></a>

```go
func SsmAutomation() SsmincidentsResponsePlanActionSsmAutomationList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList">SsmincidentsResponsePlanActionSsmAutomationList</a>

---

##### `SsmAutomationInput`<sup>Optional</sup> <a name="SsmAutomationInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.ssmAutomationInput"></a>

```go
func SsmAutomationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmincidentsResponsePlanAction
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanAction">SsmincidentsResponsePlanAction</a>

---


### SsmincidentsResponsePlanActionSsmAutomationList <a name="SsmincidentsResponsePlanActionSsmAutomationList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionSsmAutomationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanActionSsmAutomationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanActionSsmAutomationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionSsmAutomationOutputReference <a name="SsmincidentsResponsePlanActionSsmAutomationOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionSsmAutomationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanActionSsmAutomationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDynamicParameters">ResetDynamicParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetTargetAccount">ResetTargetAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDocumentVersion"></a>

```go
func ResetDocumentVersion()
```

##### `ResetDynamicParameters` <a name="ResetDynamicParameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetDynamicParameters"></a>

```go
func ResetDynamicParameters()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetTargetAccount` <a name="ResetTargetAccount" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.resetTargetAccount"></a>

```go
func ResetTargetAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList">SsmincidentsResponsePlanActionSsmAutomationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentNameInput">DocumentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersionInput">DocumentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParametersInput">DynamicParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccountInput">TargetAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName">DocumentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters">DynamicParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount">TargetAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameter"></a>

```go
func Parameter() SsmincidentsResponsePlanActionSsmAutomationParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList">SsmincidentsResponsePlanActionSsmAutomationParameterList</a>

---

##### `DocumentNameInput`<sup>Optional</sup> <a name="DocumentNameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentNameInput"></a>

```go
func DocumentNameInput() *string
```

- *Type:* *string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersionInput"></a>

```go
func DocumentVersionInput() *string
```

- *Type:* *string

---

##### `DynamicParametersInput`<sup>Optional</sup> <a name="DynamicParametersInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParametersInput"></a>

```go
func DynamicParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TargetAccountInput`<sup>Optional</sup> <a name="TargetAccountInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccountInput"></a>

```go
func TargetAccountInput() *string
```

- *Type:* *string

---

##### `DocumentName`<sup>Required</sup> <a name="DocumentName" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentName"></a>

```go
func DocumentName() *string
```

- *Type:* *string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.documentVersion"></a>

```go
func DocumentVersion() *string
```

- *Type:* *string

---

##### `DynamicParameters`<sup>Required</sup> <a name="DynamicParameters" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.dynamicParameters"></a>

```go
func DynamicParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TargetAccount`<sup>Required</sup> <a name="TargetAccount" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.targetAccount"></a>

```go
func TargetAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionSsmAutomationParameterList <a name="SsmincidentsResponsePlanActionSsmAutomationParameterList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionSsmAutomationParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanActionSsmAutomationParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference <a name="SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetList <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIncidentTemplateNotificationTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanIncidentTemplateNotificationTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIncidentTemplateOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIncidentTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanIncidentTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget">PutNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString">ResetDedupeString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags">ResetIncidentTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTarget">ResetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationTarget` <a name="PutNotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget"></a>

```go
func PutNotificationTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDedupeString` <a name="ResetDedupeString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString"></a>

```go
func ResetDedupeString()
```

##### `ResetIncidentTags` <a name="ResetIncidentTags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags"></a>

```go
func ResetIncidentTags()
```

##### `ResetNotificationTarget` <a name="ResetNotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTarget"></a>

```go
func ResetNotificationTarget()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary"></a>

```go
func ResetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget">NotificationTarget</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput">DedupeStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput">ImpactInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput">IncidentTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetInput">NotificationTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">DedupeString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">Impact</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">IncidentTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationTarget`<sup>Required</sup> <a name="NotificationTarget" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTarget"></a>

```go
func NotificationTarget() SsmincidentsResponsePlanIncidentTemplateNotificationTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetList</a>

---

##### `DedupeStringInput`<sup>Optional</sup> <a name="DedupeStringInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput"></a>

```go
func DedupeStringInput() *string
```

- *Type:* *string

---

##### `ImpactInput`<sup>Optional</sup> <a name="ImpactInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput"></a>

```go
func ImpactInput() *f64
```

- *Type:* *f64

---

##### `IncidentTagsInput`<sup>Optional</sup> <a name="IncidentTagsInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput"></a>

```go
func IncidentTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotificationTargetInput`<sup>Optional</sup> <a name="NotificationTargetInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetInput"></a>

```go
func NotificationTargetInput() interface{}
```

- *Type:* interface{}

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `DedupeString`<sup>Required</sup> <a name="DedupeString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```go
func DedupeString() *string
```

- *Type:* *string

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```go
func Impact() *f64
```

- *Type:* *f64

---

##### `IncidentTags`<sup>Required</sup> <a name="IncidentTags" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```go
func IncidentTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---


### SsmincidentsResponsePlanIntegrationOutputReference <a name="SsmincidentsResponsePlanIntegrationOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty">PutPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resetPagerduty">ResetPagerduty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPagerduty` <a name="PutPagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty"></a>

```go
func PutPagerduty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.putPagerduty.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPagerduty` <a name="ResetPagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.resetPagerduty"></a>

```go
func ResetPagerduty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList">SsmincidentsResponsePlanIntegrationPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerdutyInput">PagerdutyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerduty"></a>

```go
func Pagerduty() SsmincidentsResponsePlanIntegrationPagerdutyList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList">SsmincidentsResponsePlanIntegrationPagerdutyList</a>

---

##### `PagerdutyInput`<sup>Optional</sup> <a name="PagerdutyInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.pagerdutyInput"></a>

```go
func PagerdutyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmincidentsResponsePlanIntegration
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegration">SsmincidentsResponsePlanIntegration</a>

---


### SsmincidentsResponsePlanIntegrationPagerdutyList <a name="SsmincidentsResponsePlanIntegrationPagerdutyList" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIntegrationPagerdutyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanIntegrationPagerdutyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanIntegrationPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIntegrationPagerdutyOutputReference <a name="SsmincidentsResponsePlanIntegrationPagerdutyOutputReference" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIntegrationPagerdutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanIntegrationPagerdutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationPagerdutyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



