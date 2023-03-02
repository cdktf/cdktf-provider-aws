# `dataAwsConnectRoutingProfile` Submodule <a name="`dataAwsConnectRoutingProfile` Submodule" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectRoutingProfile <a name="DataAwsConnectRoutingProfile" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile aws_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

dataawsconnectroutingprofile.NewDataAwsConnectRoutingProfile(scope Construct, id *string, config DataAwsConnectRoutingProfileConfig) DataAwsConnectRoutingProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig">DataAwsConnectRoutingProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig">DataAwsConnectRoutingProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRoutingProfileId">ResetRoutingProfileId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetName"></a>

```go
func ResetName()
```

##### `ResetRoutingProfileId` <a name="ResetRoutingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRoutingProfileId"></a>

```go
func ResetRoutingProfileId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

dataawsconnectroutingprofile.DataAwsConnectRoutingProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

dataawsconnectroutingprofile.DataAwsConnectRoutingProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

dataawsconnectroutingprofile.DataAwsConnectRoutingProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.defaultOutboundQueueId">DefaultOutboundQueueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.mediaConcurrencies">MediaConcurrencies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList">DataAwsConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.queueConfigs">QueueConfigs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList">DataAwsConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileIdInput">RoutingProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileId">RoutingProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultOutboundQueueId`<sup>Required</sup> <a name="DefaultOutboundQueueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.defaultOutboundQueueId"></a>

```go
func DefaultOutboundQueueId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MediaConcurrencies`<sup>Required</sup> <a name="MediaConcurrencies" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.mediaConcurrencies"></a>

```go
func MediaConcurrencies() DataAwsConnectRoutingProfileMediaConcurrenciesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList">DataAwsConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `QueueConfigs`<sup>Required</sup> <a name="QueueConfigs" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.queueConfigs"></a>

```go
func QueueConfigs() DataAwsConnectRoutingProfileQueueConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList">DataAwsConnectRoutingProfileQueueConfigsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoutingProfileIdInput`<sup>Optional</sup> <a name="RoutingProfileIdInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileIdInput"></a>

```go
func RoutingProfileIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoutingProfileId`<sup>Required</sup> <a name="RoutingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileId"></a>

```go
func RoutingProfileId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectRoutingProfileConfig <a name="DataAwsConnectRoutingProfileConfig" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

&dataawsconnectroutingprofile.DataAwsConnectRoutingProfileConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Id: *string,
	Name: *string,
	RoutingProfileId: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#id DataAwsConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#name DataAwsConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.routingProfileId">RoutingProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#id DataAwsConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#name DataAwsConnectRoutingProfile#name}.

---

##### `RoutingProfileId`<sup>Optional</sup> <a name="RoutingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.routingProfileId"></a>

```go
RoutingProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}.

---

### DataAwsConnectRoutingProfileMediaConcurrencies <a name="DataAwsConnectRoutingProfileMediaConcurrencies" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

&dataawsconnectroutingprofile.DataAwsConnectRoutingProfileMediaConcurrencies {

}
```


### DataAwsConnectRoutingProfileQueueConfigs <a name="DataAwsConnectRoutingProfileQueueConfigs" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

&dataawsconnectroutingprofile.DataAwsConnectRoutingProfileQueueConfigs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectRoutingProfileMediaConcurrenciesList <a name="DataAwsConnectRoutingProfileMediaConcurrenciesList" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

dataawsconnectroutingprofile.NewDataAwsConnectRoutingProfileMediaConcurrenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsConnectRoutingProfileMediaConcurrenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get"></a>

```go
func Get(index *f64) DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference <a name="DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

dataawsconnectroutingprofile.NewDataAwsConnectRoutingProfileMediaConcurrenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">Concurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies">DataAwsConnectRoutingProfileMediaConcurrencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Concurrency`<sup>Required</sup> <a name="Concurrency" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```go
func Concurrency() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsConnectRoutingProfileMediaConcurrencies
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies">DataAwsConnectRoutingProfileMediaConcurrencies</a>

---


### DataAwsConnectRoutingProfileQueueConfigsList <a name="DataAwsConnectRoutingProfileQueueConfigsList" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

dataawsconnectroutingprofile.NewDataAwsConnectRoutingProfileQueueConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsConnectRoutingProfileQueueConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get"></a>

```go
func Get(index *f64) DataAwsConnectRoutingProfileQueueConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsConnectRoutingProfileQueueConfigsOutputReference <a name="DataAwsConnectRoutingProfileQueueConfigsOutputReference" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectroutingprofile"

dataawsconnectroutingprofile.NewDataAwsConnectRoutingProfileQueueConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsConnectRoutingProfileQueueConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.delay">Delay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueArn">QueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueId">QueueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs">DataAwsConnectRoutingProfileQueueConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```go
func Delay() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `QueueArn`<sup>Required</sup> <a name="QueueArn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueArn"></a>

```go
func QueueArn() *string
```

- *Type:* *string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueId"></a>

```go
func QueueId() *string
```

- *Type:* *string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsConnectRoutingProfileQueueConfigs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs">DataAwsConnectRoutingProfileQueueConfigs</a>

---



