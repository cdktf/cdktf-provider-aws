# `cloudformationStackSet` Submodule <a name="`cloudformationStackSet` Submodule" id="@cdktf/provider-aws.cloudformationStackSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSet <a name="CloudformationStackSet" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set aws_cloudformation_stack_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

cloudformationstackset.NewCloudformationStackSet(scope Construct, id *string, config CloudformationStackSetConfig) CloudformationStackSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig">CloudformationStackSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig">CloudformationStackSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment">PutAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences">PutOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn">ResetAdministrationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment">ResetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCallAs">ResetCallAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName">ResetExecutionRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences">ResetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetPermissionModel">ResetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl">ResetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoDeployment` <a name="PutAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment"></a>

```go
func PutAutoDeployment(value CloudformationStackSetAutoDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `PutOperationPreferences` <a name="PutOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences"></a>

```go
func PutOperationPreferences(value CloudformationStackSetOperationPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts"></a>

```go
func PutTimeouts(value CloudformationStackSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

---

##### `ResetAdministrationRoleArn` <a name="ResetAdministrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn"></a>

```go
func ResetAdministrationRoleArn()
```

##### `ResetAutoDeployment` <a name="ResetAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment"></a>

```go
func ResetAutoDeployment()
```

##### `ResetCallAs` <a name="ResetCallAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCallAs"></a>

```go
func ResetCallAs()
```

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCapabilities"></a>

```go
func ResetCapabilities()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExecutionRoleName` <a name="ResetExecutionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName"></a>

```go
func ResetExecutionRoleName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetId"></a>

```go
func ResetId()
```

##### `ResetOperationPreferences` <a name="ResetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences"></a>

```go
func ResetOperationPreferences()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPermissionModel` <a name="ResetPermissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetPermissionModel"></a>

```go
func ResetPermissionModel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateBody"></a>

```go
func ResetTemplateBody()
```

##### `ResetTemplateUrl` <a name="ResetTemplateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl"></a>

```go
func ResetTemplateUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

cloudformationstackset.CloudformationStackSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

cloudformationstackset.CloudformationStackSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

cloudformationstackset.CloudformationStackSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeployment">AutoDeployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferences">OperationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.stackSetId">StackSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference">CloudformationStackSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput">AdministrationRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput">AutoDeploymentInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAsInput">CallAsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput">ExecutionRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput">OperationPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput">PermissionModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput">TemplateBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput">TemplateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn">AdministrationRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAs">CallAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleName">ExecutionRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModel">PermissionModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBody">TemplateBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrl">TemplateUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoDeployment`<sup>Required</sup> <a name="AutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeployment"></a>

```go
func AutoDeployment() CloudformationStackSetAutoDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a>

---

##### `OperationPreferences`<sup>Required</sup> <a name="OperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferences"></a>

```go
func OperationPreferences() CloudformationStackSetOperationPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a>

---

##### `StackSetId`<sup>Required</sup> <a name="StackSetId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.stackSetId"></a>

```go
func StackSetId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeouts"></a>

```go
func Timeouts() CloudformationStackSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference">CloudformationStackSetTimeoutsOutputReference</a>

---

##### `AdministrationRoleArnInput`<sup>Optional</sup> <a name="AdministrationRoleArnInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput"></a>

```go
func AdministrationRoleArnInput() *string
```

- *Type:* *string

---

##### `AutoDeploymentInput`<sup>Optional</sup> <a name="AutoDeploymentInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput"></a>

```go
func AutoDeploymentInput() CloudformationStackSetAutoDeployment
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `CallAsInput`<sup>Optional</sup> <a name="CallAsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAsInput"></a>

```go
func CallAsInput() *string
```

- *Type:* *string

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleNameInput`<sup>Optional</sup> <a name="ExecutionRoleNameInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput"></a>

```go
func ExecutionRoleNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperationPreferencesInput`<sup>Optional</sup> <a name="OperationPreferencesInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput"></a>

```go
func OperationPreferencesInput() CloudformationStackSetOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PermissionModelInput`<sup>Optional</sup> <a name="PermissionModelInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput"></a>

```go
func PermissionModelInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput"></a>

```go
func TemplateBodyInput() *string
```

- *Type:* *string

---

##### `TemplateUrlInput`<sup>Optional</sup> <a name="TemplateUrlInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput"></a>

```go
func TemplateUrlInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdministrationRoleArn`<sup>Required</sup> <a name="AdministrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn"></a>

```go
func AdministrationRoleArn() *string
```

- *Type:* *string

---

##### `CallAs`<sup>Required</sup> <a name="CallAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAs"></a>

```go
func CallAs() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionRoleName`<sup>Required</sup> <a name="ExecutionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleName"></a>

```go
func ExecutionRoleName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModel"></a>

```go
func PermissionModel() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBody"></a>

```go
func TemplateBody() *string
```

- *Type:* *string

---

##### `TemplateUrl`<sup>Required</sup> <a name="TemplateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrl"></a>

```go
func TemplateUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetAutoDeployment <a name="CloudformationStackSetAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

&cloudformationstackset.CloudformationStackSetAutoDeployment {
	Enabled: interface{},
	RetainStacksOnAccountRemoval: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#enabled CloudformationStackSet#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval">RetainStacksOnAccountRemoval</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#enabled CloudformationStackSet#enabled}.

---

##### `RetainStacksOnAccountRemoval`<sup>Optional</sup> <a name="RetainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval"></a>

```go
RetainStacksOnAccountRemoval interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}.

---

### CloudformationStackSetConfig <a name="CloudformationStackSetConfig" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

&cloudformationstackset.CloudformationStackSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AdministrationRoleArn: *string,
	AutoDeployment: github.com/cdktf/cdktf-provider-aws-go/aws.cloudformationStackSet.CloudformationStackSetAutoDeployment,
	CallAs: *string,
	Capabilities: *[]*string,
	Description: *string,
	ExecutionRoleName: *string,
	Id: *string,
	OperationPreferences: github.com/cdktf/cdktf-provider-aws-go/aws.cloudformationStackSet.CloudformationStackSetOperationPreferences,
	Parameters: *map[string]*string,
	PermissionModel: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TemplateBody: *string,
	TemplateUrl: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.cloudformationStackSet.CloudformationStackSetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#name CloudformationStackSet#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn">AdministrationRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment">AutoDeployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | auto_deployment block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.callAs">CallAs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#call_as CloudformationStackSet#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#description CloudformationStackSet#description}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName">ExecutionRoleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#id CloudformationStackSet#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences">OperationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#parameters CloudformationStackSet#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel">PermissionModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags CloudformationStackSet#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody">TemplateBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_body CloudformationStackSet#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl">TemplateUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_url CloudformationStackSet#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#name CloudformationStackSet#name}.

---

##### `AdministrationRoleArn`<sup>Optional</sup> <a name="AdministrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn"></a>

```go
AdministrationRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}.

---

##### `AutoDeployment`<sup>Optional</sup> <a name="AutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment"></a>

```go
AutoDeployment CloudformationStackSetAutoDeployment
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

auto_deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `CallAs`<sup>Optional</sup> <a name="CallAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.callAs"></a>

```go
CallAs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#call_as CloudformationStackSet#call_as}.

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#description CloudformationStackSet#description}.

---

##### `ExecutionRoleName`<sup>Optional</sup> <a name="ExecutionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName"></a>

```go
ExecutionRoleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#id CloudformationStackSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperationPreferences`<sup>Optional</sup> <a name="OperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences"></a>

```go
OperationPreferences CloudformationStackSetOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#parameters CloudformationStackSet#parameters}.

---

##### `PermissionModel`<sup>Optional</sup> <a name="PermissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel"></a>

```go
PermissionModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags CloudformationStackSet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}.

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody"></a>

```go
TemplateBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_body CloudformationStackSet#template_body}.

---

##### `TemplateUrl`<sup>Optional</sup> <a name="TemplateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl"></a>

```go
TemplateUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_url CloudformationStackSet#template_url}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.timeouts"></a>

```go
Timeouts CloudformationStackSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#timeouts CloudformationStackSet#timeouts}

---

### CloudformationStackSetOperationPreferences <a name="CloudformationStackSetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

&cloudformationstackset.CloudformationStackSetOperationPreferences {
	FailureToleranceCount: *f64,
	FailureTolerancePercentage: *f64,
	MaxConcurrentCount: *f64,
	MaxConcurrentPercentage: *f64,
	RegionConcurrencyType: *string,
	RegionOrder: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount">MaxConcurrentCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage">MaxConcurrentPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType">RegionConcurrencyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder">RegionOrder</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_order CloudformationStackSet#region_order}. |

---

##### `FailureToleranceCount`<sup>Optional</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount"></a>

```go
FailureToleranceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}.

---

##### `FailureTolerancePercentage`<sup>Optional</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage"></a>

```go
FailureTolerancePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}.

---

##### `MaxConcurrentCount`<sup>Optional</sup> <a name="MaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount"></a>

```go
MaxConcurrentCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}.

---

##### `MaxConcurrentPercentage`<sup>Optional</sup> <a name="MaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage"></a>

```go
MaxConcurrentPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}.

---

##### `RegionConcurrencyType`<sup>Optional</sup> <a name="RegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType"></a>

```go
RegionConcurrencyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}.

---

##### `RegionOrder`<sup>Optional</sup> <a name="RegionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder"></a>

```go
RegionOrder *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_order CloudformationStackSet#region_order}.

---

### CloudformationStackSetTimeouts <a name="CloudformationStackSetTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

&cloudformationstackset.CloudformationStackSetTimeouts {
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#update CloudformationStackSet#update}. |

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#update CloudformationStackSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetAutoDeploymentOutputReference <a name="CloudformationStackSetAutoDeploymentOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

cloudformationstackset.NewCloudformationStackSetAutoDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackSetAutoDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval">ResetRetainStacksOnAccountRemoval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRetainStacksOnAccountRemoval` <a name="ResetRetainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval"></a>

```go
func ResetRetainStacksOnAccountRemoval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput">RetainStacksOnAccountRemovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval">RetainStacksOnAccountRemoval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RetainStacksOnAccountRemovalInput`<sup>Optional</sup> <a name="RetainStacksOnAccountRemovalInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput"></a>

```go
func RetainStacksOnAccountRemovalInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `RetainStacksOnAccountRemoval`<sup>Required</sup> <a name="RetainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval"></a>

```go
func RetainStacksOnAccountRemoval() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudformationStackSetAutoDeployment
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---


### CloudformationStackSetOperationPreferencesOutputReference <a name="CloudformationStackSetOperationPreferencesOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

cloudformationstackset.NewCloudformationStackSetOperationPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackSetOperationPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount">ResetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage">ResetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount">ResetMaxConcurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage">ResetMaxConcurrentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType">ResetRegionConcurrencyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder">ResetRegionOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureToleranceCount` <a name="ResetFailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```go
func ResetFailureToleranceCount()
```

##### `ResetFailureTolerancePercentage` <a name="ResetFailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```go
func ResetFailureTolerancePercentage()
```

##### `ResetMaxConcurrentCount` <a name="ResetMaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```go
func ResetMaxConcurrentCount()
```

##### `ResetMaxConcurrentPercentage` <a name="ResetMaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```go
func ResetMaxConcurrentPercentage()
```

##### `ResetRegionConcurrencyType` <a name="ResetRegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```go
func ResetRegionConcurrencyType()
```

##### `ResetRegionOrder` <a name="ResetRegionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder"></a>

```go
func ResetRegionOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput">FailureToleranceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput">FailureTolerancePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput">MaxConcurrentCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">MaxConcurrentPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">RegionConcurrencyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput">RegionOrderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount">MaxConcurrentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage">MaxConcurrentPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType">RegionConcurrencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder">RegionOrder</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureToleranceCountInput`<sup>Optional</sup> <a name="FailureToleranceCountInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```go
func FailureToleranceCountInput() *f64
```

- *Type:* *f64

---

##### `FailureTolerancePercentageInput`<sup>Optional</sup> <a name="FailureTolerancePercentageInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```go
func FailureTolerancePercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentCountInput`<sup>Optional</sup> <a name="MaxConcurrentCountInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```go
func MaxConcurrentCountInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentPercentageInput`<sup>Optional</sup> <a name="MaxConcurrentPercentageInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```go
func MaxConcurrentPercentageInput() *f64
```

- *Type:* *f64

---

##### `RegionConcurrencyTypeInput`<sup>Optional</sup> <a name="RegionConcurrencyTypeInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```go
func RegionConcurrencyTypeInput() *string
```

- *Type:* *string

---

##### `RegionOrderInput`<sup>Optional</sup> <a name="RegionOrderInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput"></a>

```go
func RegionOrderInput() *[]*string
```

- *Type:* *[]*string

---

##### `FailureToleranceCount`<sup>Required</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```go
func FailureToleranceCount() *f64
```

- *Type:* *f64

---

##### `FailureTolerancePercentage`<sup>Required</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```go
func FailureTolerancePercentage() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentCount`<sup>Required</sup> <a name="MaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```go
func MaxConcurrentCount() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentPercentage`<sup>Required</sup> <a name="MaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```go
func MaxConcurrentPercentage() *f64
```

- *Type:* *f64

---

##### `RegionConcurrencyType`<sup>Required</sup> <a name="RegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```go
func RegionConcurrencyType() *string
```

- *Type:* *string

---

##### `RegionOrder`<sup>Required</sup> <a name="RegionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder"></a>

```go
func RegionOrder() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudformationStackSetOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---


### CloudformationStackSetTimeoutsOutputReference <a name="CloudformationStackSetTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudformationstackset"

cloudformationstackset.NewCloudformationStackSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



