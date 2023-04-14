# `medialiveMultiplex` Submodule <a name="`medialiveMultiplex` Submodule" id="@cdktf/provider-aws.medialiveMultiplex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplex <a name="MedialiveMultiplex" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex aws_medialive_multiplex}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

medialivemultiplex.NewMedialiveMultiplex(scope Construct, id *string, config MedialiveMultiplexConfig) MedialiveMultiplex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig">MedialiveMultiplexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig">MedialiveMultiplexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings">PutMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetMultiplexSettings">ResetMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetStartMultiplex">ResetStartMultiplex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMultiplexSettings` <a name="PutMultiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings"></a>

```go
func PutMultiplexSettings(value MedialiveMultiplexMultiplexSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putTimeouts"></a>

```go
func PutTimeouts(value MedialiveMultiplexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetId"></a>

```go
func ResetId()
```

##### `ResetMultiplexSettings` <a name="ResetMultiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetMultiplexSettings"></a>

```go
func ResetMultiplexSettings()
```

##### `ResetStartMultiplex` <a name="ResetStartMultiplex" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetStartMultiplex"></a>

```go
func ResetStartMultiplex()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

medialivemultiplex.MedialiveMultiplex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

medialivemultiplex.MedialiveMultiplex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

medialivemultiplex.MedialiveMultiplex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings">MultiplexSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference">MedialiveMultiplexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput">MultiplexSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.startMultiplexInput">StartMultiplexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.startMultiplex">StartMultiplex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `MultiplexSettings`<sup>Required</sup> <a name="MultiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings"></a>

```go
func MultiplexSettings() MedialiveMultiplexMultiplexSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.timeouts"></a>

```go
func Timeouts() MedialiveMultiplexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference">MedialiveMultiplexTimeoutsOutputReference</a>

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MultiplexSettingsInput`<sup>Optional</sup> <a name="MultiplexSettingsInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput"></a>

```go
func MultiplexSettingsInput() MedialiveMultiplexMultiplexSettings
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StartMultiplexInput`<sup>Optional</sup> <a name="StartMultiplexInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.startMultiplexInput"></a>

```go
func StartMultiplexInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartMultiplex`<sup>Required</sup> <a name="StartMultiplex" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.startMultiplex"></a>

```go
func StartMultiplex() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexConfig <a name="MedialiveMultiplexConfig" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

&medialivemultiplex.MedialiveMultiplexConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZones: *[]*string,
	Name: *string,
	Id: *string,
	MultiplexSettings: github.com/cdktf/cdktf-provider-aws-go/aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings,
	StartMultiplex: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.medialiveMultiplex.MedialiveMultiplexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#name MedialiveMultiplex#name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#id MedialiveMultiplex#id}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings">MultiplexSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | multiplex_settings block. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.startMultiplex">StartMultiplex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#start_multiplex MedialiveMultiplex#start_multiplex}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags MedialiveMultiplex#tags}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags_all MedialiveMultiplex#tags_all}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#name MedialiveMultiplex#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#id MedialiveMultiplex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiplexSettings`<sup>Optional</sup> <a name="MultiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings"></a>

```go
MultiplexSettings MedialiveMultiplexMultiplexSettings
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

multiplex_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}

---

##### `StartMultiplex`<sup>Optional</sup> <a name="StartMultiplex" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.startMultiplex"></a>

```go
StartMultiplex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#start_multiplex MedialiveMultiplex#start_multiplex}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags MedialiveMultiplex#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags_all MedialiveMultiplex#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.timeouts"></a>

```go
Timeouts MedialiveMultiplexTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#timeouts MedialiveMultiplex#timeouts}

---

### MedialiveMultiplexMultiplexSettings <a name="MedialiveMultiplexMultiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

&medialivemultiplex.MedialiveMultiplexMultiplexSettings {
	TransportStreamBitrate: *f64,
	TransportStreamId: *f64,
	MaximumVideoBufferDelayMilliseconds: *f64,
	TransportStreamReservedBitrate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate">TransportStreamBitrate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId">TransportStreamId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds">MaximumVideoBufferDelayMilliseconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate">TransportStreamReservedBitrate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}. |

---

##### `TransportStreamBitrate`<sup>Required</sup> <a name="TransportStreamBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

```go
TransportStreamBitrate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}.

---

##### `TransportStreamId`<sup>Required</sup> <a name="TransportStreamId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId"></a>

```go
TransportStreamId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}.

---

##### `MaximumVideoBufferDelayMilliseconds`<sup>Optional</sup> <a name="MaximumVideoBufferDelayMilliseconds" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

```go
MaximumVideoBufferDelayMilliseconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}.

---

##### `TransportStreamReservedBitrate`<sup>Optional</sup> <a name="TransportStreamReservedBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

```go
TransportStreamReservedBitrate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}.

---

### MedialiveMultiplexTimeouts <a name="MedialiveMultiplexTimeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

&medialivemultiplex.MedialiveMultiplexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#create MedialiveMultiplex#create}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#delete MedialiveMultiplex#delete}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#update MedialiveMultiplex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#create MedialiveMultiplex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#delete MedialiveMultiplex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#update MedialiveMultiplex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexMultiplexSettingsOutputReference <a name="MedialiveMultiplexMultiplexSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

medialivemultiplex.NewMedialiveMultiplexMultiplexSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MedialiveMultiplexMultiplexSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds">ResetMaximumVideoBufferDelayMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate">ResetTransportStreamReservedBitrate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumVideoBufferDelayMilliseconds` <a name="ResetMaximumVideoBufferDelayMilliseconds" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds"></a>

```go
func ResetMaximumVideoBufferDelayMilliseconds()
```

##### `ResetTransportStreamReservedBitrate` <a name="ResetTransportStreamReservedBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate"></a>

```go
func ResetTransportStreamReservedBitrate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput">MaximumVideoBufferDelayMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput">TransportStreamBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput">TransportStreamIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput">TransportStreamReservedBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds">MaximumVideoBufferDelayMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate">TransportStreamBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId">TransportStreamId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate">TransportStreamReservedBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumVideoBufferDelayMillisecondsInput`<sup>Optional</sup> <a name="MaximumVideoBufferDelayMillisecondsInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput"></a>

```go
func MaximumVideoBufferDelayMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `TransportStreamBitrateInput`<sup>Optional</sup> <a name="TransportStreamBitrateInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput"></a>

```go
func TransportStreamBitrateInput() *f64
```

- *Type:* *f64

---

##### `TransportStreamIdInput`<sup>Optional</sup> <a name="TransportStreamIdInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput"></a>

```go
func TransportStreamIdInput() *f64
```

- *Type:* *f64

---

##### `TransportStreamReservedBitrateInput`<sup>Optional</sup> <a name="TransportStreamReservedBitrateInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput"></a>

```go
func TransportStreamReservedBitrateInput() *f64
```

- *Type:* *f64

---

##### `MaximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="MaximumVideoBufferDelayMilliseconds" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds"></a>

```go
func MaximumVideoBufferDelayMilliseconds() *f64
```

- *Type:* *f64

---

##### `TransportStreamBitrate`<sup>Required</sup> <a name="TransportStreamBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate"></a>

```go
func TransportStreamBitrate() *f64
```

- *Type:* *f64

---

##### `TransportStreamId`<sup>Required</sup> <a name="TransportStreamId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId"></a>

```go
func TransportStreamId() *f64
```

- *Type:* *f64

---

##### `TransportStreamReservedBitrate`<sup>Required</sup> <a name="TransportStreamReservedBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate"></a>

```go
func TransportStreamReservedBitrate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() MedialiveMultiplexMultiplexSettings
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---


### MedialiveMultiplexTimeoutsOutputReference <a name="MedialiveMultiplexTimeoutsOutputReference" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/medialivemultiplex"

medialivemultiplex.NewMedialiveMultiplexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MedialiveMultiplexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



