# `sagemakerApp` Submodule <a name="`sagemakerApp` Submodule" id="@cdktf/provider-aws.sagemakerApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerApp <a name="SagemakerApp" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app aws_sagemaker_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerapp"

sagemakerapp.NewSagemakerApp(scope Construct, id *string, config SagemakerAppConfig) SagemakerApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig">SagemakerAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig">SagemakerAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec">PutResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetResourceSpec">ResetResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetSpaceName">ResetSpaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetUserProfileName">ResetUserProfileName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutResourceSpec` <a name="PutResourceSpec" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec"></a>

```go
func PutResourceSpec(value SagemakerAppResourceSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.putResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceSpec` <a name="ResetResourceSpec" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetResourceSpec"></a>

```go
func ResetResourceSpec()
```

##### `ResetSpaceName` <a name="ResetSpaceName" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetSpaceName"></a>

```go
func ResetSpaceName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUserProfileName` <a name="ResetUserProfileName" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.resetUserProfileName"></a>

```go
func ResetUserProfileName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerapp"

sagemakerapp.SagemakerApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerapp"

sagemakerapp.SagemakerApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerapp"

sagemakerapp.SagemakerApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.resourceSpec">ResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference">SagemakerAppResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appNameInput">AppNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appTypeInput">AppTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.resourceSpecInput">ResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.spaceNameInput">SpaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.userProfileNameInput">UserProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appType">AppType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.spaceName">SpaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.userProfileName">UserProfileName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ResourceSpec`<sup>Required</sup> <a name="ResourceSpec" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.resourceSpec"></a>

```go
func ResourceSpec() SagemakerAppResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference">SagemakerAppResourceSpecOutputReference</a>

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appNameInput"></a>

```go
func AppNameInput() *string
```

- *Type:* *string

---

##### `AppTypeInput`<sup>Optional</sup> <a name="AppTypeInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appTypeInput"></a>

```go
func AppTypeInput() *string
```

- *Type:* *string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceSpecInput`<sup>Optional</sup> <a name="ResourceSpecInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.resourceSpecInput"></a>

```go
func ResourceSpecInput() SagemakerAppResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a>

---

##### `SpaceNameInput`<sup>Optional</sup> <a name="SpaceNameInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.spaceNameInput"></a>

```go
func SpaceNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserProfileNameInput`<sup>Optional</sup> <a name="UserProfileNameInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.userProfileNameInput"></a>

```go
func UserProfileNameInput() *string
```

- *Type:* *string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `AppType`<sup>Required</sup> <a name="AppType" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.appType"></a>

```go
func AppType() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.spaceName"></a>

```go
func SpaceName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserProfileName`<sup>Required</sup> <a name="UserProfileName" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.userProfileName"></a>

```go
func UserProfileName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerApp.SagemakerApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAppConfig <a name="SagemakerAppConfig" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerapp"

&sagemakerapp.SagemakerAppConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppName: *string,
	AppType: *string,
	DomainId: *string,
	Id: *string,
	ResourceSpec: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerApp.SagemakerAppResourceSpec,
	SpaceName: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	UserProfileName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.appName">AppName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_name SagemakerApp#app_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.appType">AppType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_type SagemakerApp#app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.domainId">DomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#domain_id SagemakerApp#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#id SagemakerApp#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.resourceSpec">ResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.spaceName">SpaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#space_name SagemakerApp#space_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags SagemakerApp#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags_all SagemakerApp#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.userProfileName">UserProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#user_profile_name SagemakerApp#user_profile_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.appName"></a>

```go
AppName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_name SagemakerApp#app_name}.

---

##### `AppType`<sup>Required</sup> <a name="AppType" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.appType"></a>

```go
AppType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#app_type SagemakerApp#app_type}.

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#domain_id SagemakerApp#domain_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#id SagemakerApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceSpec`<sup>Optional</sup> <a name="ResourceSpec" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.resourceSpec"></a>

```go
ResourceSpec SagemakerAppResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#resource_spec SagemakerApp#resource_spec}

---

##### `SpaceName`<sup>Optional</sup> <a name="SpaceName" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.spaceName"></a>

```go
SpaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#space_name SagemakerApp#space_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags SagemakerApp#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#tags_all SagemakerApp#tags_all}.

---

##### `UserProfileName`<sup>Optional</sup> <a name="UserProfileName" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppConfig.property.userProfileName"></a>

```go
UserProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#user_profile_name SagemakerApp#user_profile_name}.

---

### SagemakerAppResourceSpec <a name="SagemakerAppResourceSpec" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerapp"

&sagemakerapp.SagemakerAppResourceSpec {
	InstanceType: *string,
	LifecycleConfigArn: *string,
	SagemakerImageArn: *string,
	SagemakerImageVersionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#instance_type SagemakerApp#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#lifecycle_config_arn SagemakerApp#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_version_arn SagemakerApp#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#instance_type SagemakerApp#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.lifecycleConfigArn"></a>

```go
LifecycleConfigArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#lifecycle_config_arn SagemakerApp#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.sagemakerImageArn"></a>

```go
SagemakerImageArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec.property.sagemakerImageVersionArn"></a>

```go
SagemakerImageVersionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app#sagemaker_image_version_arn SagemakerApp#sagemaker_image_version_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAppResourceSpecOutputReference <a name="SagemakerAppResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerapp"

sagemakerapp.NewSagemakerAppResourceSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerAppResourceSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```go
func ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetSagemakerImageArn"></a>

```go
func ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```go
func ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```go
func LifecycleConfigArnInput() *string
```

- *Type:* *string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```go
func SagemakerImageArnInput() *string
```

- *Type:* *string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```go
func SagemakerImageVersionArnInput() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```go
func LifecycleConfigArn() *string
```

- *Type:* *string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageArn"></a>

```go
func SagemakerImageArn() *string
```

- *Type:* *string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```go
func SagemakerImageVersionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerAppResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerApp.SagemakerAppResourceSpec">SagemakerAppResourceSpec</a>

---



