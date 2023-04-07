# `glacierVault` Submodule <a name="`glacierVault` Submodule" id="@cdktf/provider-aws.glacierVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlacierVault <a name="GlacierVault" id="@cdktf/provider-aws.glacierVault.GlacierVault"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault aws_glacier_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glacierVault.GlacierVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glaciervault"

glaciervault.NewGlacierVault(scope Construct, id *string, config GlacierVaultConfig) GlacierVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig">GlacierVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glacierVault.GlacierVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glacierVault.GlacierVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glacierVault.GlacierVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig">GlacierVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.resetAccessPolicy">ResetAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glacierVault.GlacierVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glacierVault.GlacierVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glacierVault.GlacierVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glacierVault.GlacierVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glacierVault.GlacierVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glacierVault.GlacierVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glacierVault.GlacierVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glacierVault.GlacierVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glacierVault.GlacierVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-aws.glacierVault.GlacierVault.putNotification"></a>

```go
func PutNotification(value GlacierVaultNotification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glacierVault.GlacierVault.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification">GlacierVaultNotification</a>

---

##### `ResetAccessPolicy` <a name="ResetAccessPolicy" id="@cdktf/provider-aws.glacierVault.GlacierVault.resetAccessPolicy"></a>

```go
func ResetAccessPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glacierVault.GlacierVault.resetId"></a>

```go
func ResetId()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-aws.glacierVault.GlacierVault.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glacierVault.GlacierVault.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glacierVault.GlacierVault.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glacierVault.GlacierVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glaciervault"

glaciervault.GlacierVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVault.GlacierVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glacierVault.GlacierVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glaciervault"

glaciervault.GlacierVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVault.GlacierVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glacierVault.GlacierVault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glaciervault"

glaciervault.GlacierVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVault.GlacierVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference">GlacierVaultNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.accessPolicyInput">AccessPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.notificationInput">NotificationInput</a></code> | <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification">GlacierVaultNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.accessPolicy">AccessPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.notification"></a>

```go
func Notification() GlacierVaultNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference">GlacierVaultNotificationOutputReference</a>

---

##### `AccessPolicyInput`<sup>Optional</sup> <a name="AccessPolicyInput" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.accessPolicyInput"></a>

```go
func AccessPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.notificationInput"></a>

```go
func NotificationInput() GlacierVaultNotification
```

- *Type:* <a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification">GlacierVaultNotification</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AccessPolicy`<sup>Required</sup> <a name="AccessPolicy" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.accessPolicy"></a>

```go
func AccessPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glacierVault.GlacierVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlacierVaultConfig <a name="GlacierVaultConfig" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glaciervault"

&glaciervault.GlacierVaultConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessPolicy: *string,
	Id: *string,
	Notification: github.com/cdktf/cdktf-provider-aws-go/aws.glacierVault.GlacierVaultNotification,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#name GlacierVault#name}. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.accessPolicy">AccessPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#access_policy GlacierVault#access_policy}. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#id GlacierVault#id}. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification">GlacierVaultNotification</a></code> | notification block. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#tags GlacierVault#tags}. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#tags_all GlacierVault#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#name GlacierVault#name}.

---

##### `AccessPolicy`<sup>Optional</sup> <a name="AccessPolicy" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.accessPolicy"></a>

```go
AccessPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#access_policy GlacierVault#access_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#id GlacierVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.notification"></a>

```go
Notification GlacierVaultNotification
```

- *Type:* <a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification">GlacierVaultNotification</a>

notification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#notification GlacierVault#notification}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#tags GlacierVault#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glacierVault.GlacierVaultConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#tags_all GlacierVault#tags_all}.

---

### GlacierVaultNotification <a name="GlacierVaultNotification" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glaciervault"

&glaciervault.GlacierVaultNotification {
	Events: *[]*string,
	SnsTopic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification.property.events">Events</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#events GlacierVault#events}. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification.property.snsTopic">SnsTopic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#sns_topic GlacierVault#sns_topic}. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotification.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#events GlacierVault#events}.

---

##### `SnsTopic`<sup>Required</sup> <a name="SnsTopic" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotification.property.snsTopic"></a>

```go
SnsTopic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#sns_topic GlacierVault#sns_topic}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlacierVaultNotificationOutputReference <a name="GlacierVaultNotificationOutputReference" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glaciervault"

glaciervault.NewGlacierVaultNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlacierVaultNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.snsTopicInput">SnsTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.snsTopic">SnsTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification">GlacierVaultNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopicInput`<sup>Optional</sup> <a name="SnsTopicInput" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.snsTopicInput"></a>

```go
func SnsTopicInput() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopic`<sup>Required</sup> <a name="SnsTopic" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.snsTopic"></a>

```go
func SnsTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glacierVault.GlacierVaultNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() GlacierVaultNotification
```

- *Type:* <a href="#@cdktf/provider-aws.glacierVault.GlacierVaultNotification">GlacierVaultNotification</a>

---



