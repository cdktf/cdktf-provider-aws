# `ivsPlaybackKeyPair` Submodule <a name="`ivsPlaybackKeyPair` Submodule" id="@cdktf/provider-aws.ivsPlaybackKeyPair"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsPlaybackKeyPair <a name="IvsPlaybackKeyPair" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair aws_ivs_playback_key_pair}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ivsplaybackkeypair"

ivsplaybackkeypair.NewIvsPlaybackKeyPair(scope Construct, id *string, config IvsPlaybackKeyPairConfig) IvsPlaybackKeyPair
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig">IvsPlaybackKeyPairConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig">IvsPlaybackKeyPairConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts"></a>

```go
func PutTimeouts(value IvsPlaybackKeyPairTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ivsplaybackkeypair"

ivsplaybackkeypair.IvsPlaybackKeyPair_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ivsplaybackkeypair"

ivsplaybackkeypair.IvsPlaybackKeyPair_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ivsplaybackkeypair"

ivsplaybackkeypair.IvsPlaybackKeyPair_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference">IvsPlaybackKeyPairTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeouts"></a>

```go
func Timeouts() IvsPlaybackKeyPairTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference">IvsPlaybackKeyPairTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsPlaybackKeyPairConfig <a name="IvsPlaybackKeyPairConfig" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ivsplaybackkeypair"

&ivsplaybackkeypair.IvsPlaybackKeyPairConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PublicKey: *string,
	Id: *string,
	Name: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#public_key IvsPlaybackKeyPair#public_key}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#id IvsPlaybackKeyPair#id}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#name IvsPlaybackKeyPair#name}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags IvsPlaybackKeyPair#tags}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags_all IvsPlaybackKeyPair#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#public_key IvsPlaybackKeyPair#public_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#id IvsPlaybackKeyPair#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#name IvsPlaybackKeyPair#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags IvsPlaybackKeyPair#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags_all IvsPlaybackKeyPair#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.timeouts"></a>

```go
Timeouts IvsPlaybackKeyPairTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#timeouts IvsPlaybackKeyPair#timeouts}

---

### IvsPlaybackKeyPairTimeouts <a name="IvsPlaybackKeyPairTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ivsplaybackkeypair"

&ivsplaybackkeypair.IvsPlaybackKeyPairTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#create IvsPlaybackKeyPair#create}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#delete IvsPlaybackKeyPair#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#create IvsPlaybackKeyPair#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#delete IvsPlaybackKeyPair#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvsPlaybackKeyPairTimeoutsOutputReference <a name="IvsPlaybackKeyPairTimeoutsOutputReference" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ivsplaybackkeypair"

ivsplaybackkeypair.NewIvsPlaybackKeyPairTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IvsPlaybackKeyPairTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



