# `mskconnectCustomPlugin` Submodule <a name="`mskconnectCustomPlugin` Submodule" id="@cdktf/provider-aws.mskconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskconnectCustomPlugin <a name="MskconnectCustomPlugin" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin aws_mskconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

mskconnectcustomplugin.NewMskconnectCustomPlugin(scope Construct, id *string, config MskconnectCustomPluginConfig) MskconnectCustomPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig">MskconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig">MskconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLocation` <a name="PutLocation" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation"></a>

```go
func PutLocation(value MskconnectCustomPluginLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts"></a>

```go
func PutTimeouts(value MskconnectCustomPluginTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

mskconnectcustomplugin.MskconnectCustomPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

mskconnectcustomplugin.MskconnectCustomPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

mskconnectcustomplugin.MskconnectCustomPlugin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.latestRevision">LatestRevision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference">MskconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference">MskconnectCustomPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.locationInput">LocationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.latestRevision"></a>

```go
func LatestRevision() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.location"></a>

```go
func Location() MskconnectCustomPluginLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference">MskconnectCustomPluginLocationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeouts"></a>

```go
func Timeouts() MskconnectCustomPluginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference">MskconnectCustomPluginTimeoutsOutputReference</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.locationInput"></a>

```go
func LocationInput() MskconnectCustomPluginLocation
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MskconnectCustomPluginConfig <a name="MskconnectCustomPluginConfig" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

&mskconnectcustomplugin.MskconnectCustomPluginConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContentType: *string,
	Location: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation,
	Name: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#content_type MskconnectCustomPlugin#content_type}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#name MskconnectCustomPlugin#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#description MskconnectCustomPlugin#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#id MskconnectCustomPlugin#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#content_type MskconnectCustomPlugin#content_type}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.location"></a>

```go
Location MskconnectCustomPluginLocation
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#location MskconnectCustomPlugin#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#name MskconnectCustomPlugin#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#description MskconnectCustomPlugin#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#id MskconnectCustomPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.timeouts"></a>

```go
Timeouts MskconnectCustomPluginTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#timeouts MskconnectCustomPlugin#timeouts}

---

### MskconnectCustomPluginLocation <a name="MskconnectCustomPluginLocation" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

&mskconnectcustomplugin.MskconnectCustomPluginLocation {
	S3: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | s3 block. |

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.property.s3"></a>

```go
S3 MskconnectCustomPluginLocationS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#s3 MskconnectCustomPlugin#s3}

---

### MskconnectCustomPluginLocationS3 <a name="MskconnectCustomPluginLocationS3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

&mskconnectcustomplugin.MskconnectCustomPluginLocationS3 {
	BucketArn: *string,
	FileKey: *string,
	ObjectVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.bucketArn">BucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#bucket_arn MskconnectCustomPlugin#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.fileKey">FileKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#file_key MskconnectCustomPlugin#file_key}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#object_version MskconnectCustomPlugin#object_version}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#bucket_arn MskconnectCustomPlugin#bucket_arn}.

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.fileKey"></a>

```go
FileKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#file_key MskconnectCustomPlugin#file_key}.

---

##### `ObjectVersion`<sup>Optional</sup> <a name="ObjectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.objectVersion"></a>

```go
ObjectVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#object_version MskconnectCustomPlugin#object_version}.

---

### MskconnectCustomPluginTimeouts <a name="MskconnectCustomPluginTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

&mskconnectcustomplugin.MskconnectCustomPluginTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#create MskconnectCustomPlugin#create}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#delete MskconnectCustomPlugin#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#create MskconnectCustomPlugin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#delete MskconnectCustomPlugin#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskconnectCustomPluginLocationOutputReference <a name="MskconnectCustomPluginLocationOutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

mskconnectcustomplugin.NewMskconnectCustomPluginLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectCustomPluginLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3">PutS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3"></a>

```go
func PutS3(value MskconnectCustomPluginLocationS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference">MskconnectCustomPluginLocationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3"></a>

```go
func S3() MskconnectCustomPluginLocationS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference">MskconnectCustomPluginLocationS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3Input"></a>

```go
func S3Input() MskconnectCustomPluginLocationS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectCustomPluginLocation
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---


### MskconnectCustomPluginLocationS3OutputReference <a name="MskconnectCustomPluginLocationS3OutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

mskconnectcustomplugin.NewMskconnectCustomPluginLocationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectCustomPluginLocationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resetObjectVersion">ResetObjectVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObjectVersion` <a name="ResetObjectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resetObjectVersion"></a>

```go
func ResetObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKeyInput">FileKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersionInput">ObjectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKey">FileKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `FileKeyInput`<sup>Optional</sup> <a name="FileKeyInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKeyInput"></a>

```go
func FileKeyInput() *string
```

- *Type:* *string

---

##### `ObjectVersionInput`<sup>Optional</sup> <a name="ObjectVersionInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersionInput"></a>

```go
func ObjectVersionInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKey"></a>

```go
func FileKey() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectCustomPluginLocationS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---


### MskconnectCustomPluginTimeoutsOutputReference <a name="MskconnectCustomPluginTimeoutsOutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectcustomplugin"

mskconnectcustomplugin.NewMskconnectCustomPluginTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectCustomPluginTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



