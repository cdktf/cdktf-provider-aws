# `pinpointApnsVoipChannel` Submodule <a name="`pinpointApnsVoipChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsVoipChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsVoipChannel <a name="PinpointApnsVoipChannel" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel aws_pinpoint_apns_voip_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapnsvoipchannel"

pinpointapnsvoipchannel.NewPinpointApnsVoipChannel(scope Construct, id *string, config PinpointApnsVoipChannelConfig) PinpointApnsVoipChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig">PinpointApnsVoipChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig">PinpointApnsVoipChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetBundleId">ResetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetDefaultAuthenticationMethod">ResetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTeamId">ResetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKey">ResetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKeyId">ResetTokenKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBundleId` <a name="ResetBundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetBundleId"></a>

```go
func ResetBundleId()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetDefaultAuthenticationMethod` <a name="ResetDefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetDefaultAuthenticationMethod"></a>

```go
func ResetDefaultAuthenticationMethod()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTeamId"></a>

```go
func ResetTeamId()
```

##### `ResetTokenKey` <a name="ResetTokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKey"></a>

```go
func ResetTokenKey()
```

##### `ResetTokenKeyId` <a name="ResetTokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKeyId"></a>

```go
func ResetTokenKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapnsvoipchannel"

pinpointapnsvoipchannel.PinpointApnsVoipChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapnsvoipchannel"

pinpointapnsvoipchannel.PinpointApnsVoipChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapnsvoipchannel"

pinpointapnsvoipchannel.PinpointApnsVoipChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethodInput">DefaultAuthenticationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyIdInput">TokenKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyInput">TokenKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKey">TokenKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyId">TokenKeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `DefaultAuthenticationMethodInput`<sup>Optional</sup> <a name="DefaultAuthenticationMethodInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethodInput"></a>

```go
func DefaultAuthenticationMethodInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TokenKeyIdInput`<sup>Optional</sup> <a name="TokenKeyIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyIdInput"></a>

```go
func TokenKeyIdInput() *string
```

- *Type:* *string

---

##### `TokenKeyInput`<sup>Optional</sup> <a name="TokenKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyInput"></a>

```go
func TokenKeyInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `DefaultAuthenticationMethod`<sup>Required</sup> <a name="DefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethod"></a>

```go
func DefaultAuthenticationMethod() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `TokenKey`<sup>Required</sup> <a name="TokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKey"></a>

```go
func TokenKey() *string
```

- *Type:* *string

---

##### `TokenKeyId`<sup>Required</sup> <a name="TokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyId"></a>

```go
func TokenKeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsVoipChannelConfig <a name="PinpointApnsVoipChannelConfig" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/pinpointapnsvoipchannel"

&pinpointapnsvoipchannel.PinpointApnsVoipChannelConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	BundleId: *string,
	Certificate: *string,
	DefaultAuthenticationMethod: *string,
	Enabled: interface{},
	Id: *string,
	PrivateKey: *string,
	TeamId: *string,
	TokenKey: *string,
	TokenKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.bundleId">BundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKey">TokenKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKeyId">TokenKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}.

---

##### `BundleId`<sup>Optional</sup> <a name="BundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}.

---

##### `DefaultAuthenticationMethod`<sup>Optional</sup> <a name="DefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.defaultAuthenticationMethod"></a>

```go
DefaultAuthenticationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}.

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}.

---

##### `TokenKey`<sup>Optional</sup> <a name="TokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKey"></a>

```go
TokenKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}.

---

##### `TokenKeyId`<sup>Optional</sup> <a name="TokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKeyId"></a>

```go
TokenKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}.

---



