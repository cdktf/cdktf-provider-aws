# `directoryServiceRadiusSettings` Submodule <a name="`directoryServiceRadiusSettings` Submodule" id="@cdktf/provider-aws.directoryServiceRadiusSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceRadiusSettings <a name="DirectoryServiceRadiusSettings" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings aws_directory_service_radius_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceradiussettings"

directoryserviceradiussettings.NewDirectoryServiceRadiusSettings(scope Construct, id *string, config DirectoryServiceRadiusSettingsConfig) DirectoryServiceRadiusSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig">DirectoryServiceRadiusSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig">DirectoryServiceRadiusSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetUseSameUsername">ResetUseSameUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts"></a>

```go
func PutTimeouts(value DirectoryServiceRadiusSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseSameUsername` <a name="ResetUseSameUsername" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetUseSameUsername"></a>

```go
func ResetUseSameUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceradiussettings"

directoryserviceradiussettings.DirectoryServiceRadiusSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceradiussettings"

directoryserviceradiussettings.DirectoryServiceRadiusSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceradiussettings"

directoryserviceradiussettings.DirectoryServiceRadiusSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference">DirectoryServiceRadiusSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocolInput">AuthenticationProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabelInput">DisplayLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPortInput">RadiusPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetriesInput">RadiusRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServersInput">RadiusServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeoutInput">RadiusTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecretInput">SharedSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsernameInput">UseSameUsernameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocol">AuthenticationProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabel">DisplayLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPort">RadiusPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetries">RadiusRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServers">RadiusServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeout">RadiusTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsername">UseSameUsername</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeouts"></a>

```go
func Timeouts() DirectoryServiceRadiusSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference">DirectoryServiceRadiusSettingsTimeoutsOutputReference</a>

---

##### `AuthenticationProtocolInput`<sup>Optional</sup> <a name="AuthenticationProtocolInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocolInput"></a>

```go
func AuthenticationProtocolInput() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `DisplayLabelInput`<sup>Optional</sup> <a name="DisplayLabelInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabelInput"></a>

```go
func DisplayLabelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RadiusPortInput`<sup>Optional</sup> <a name="RadiusPortInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPortInput"></a>

```go
func RadiusPortInput() *f64
```

- *Type:* *f64

---

##### `RadiusRetriesInput`<sup>Optional</sup> <a name="RadiusRetriesInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetriesInput"></a>

```go
func RadiusRetriesInput() *f64
```

- *Type:* *f64

---

##### `RadiusServersInput`<sup>Optional</sup> <a name="RadiusServersInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServersInput"></a>

```go
func RadiusServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RadiusTimeoutInput`<sup>Optional</sup> <a name="RadiusTimeoutInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeoutInput"></a>

```go
func RadiusTimeoutInput() *f64
```

- *Type:* *f64

---

##### `SharedSecretInput`<sup>Optional</sup> <a name="SharedSecretInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecretInput"></a>

```go
func SharedSecretInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseSameUsernameInput`<sup>Optional</sup> <a name="UseSameUsernameInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsernameInput"></a>

```go
func UseSameUsernameInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationProtocol`<sup>Required</sup> <a name="AuthenticationProtocol" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocol"></a>

```go
func AuthenticationProtocol() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `DisplayLabel`<sup>Required</sup> <a name="DisplayLabel" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabel"></a>

```go
func DisplayLabel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RadiusPort`<sup>Required</sup> <a name="RadiusPort" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPort"></a>

```go
func RadiusPort() *f64
```

- *Type:* *f64

---

##### `RadiusRetries`<sup>Required</sup> <a name="RadiusRetries" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetries"></a>

```go
func RadiusRetries() *f64
```

- *Type:* *f64

---

##### `RadiusServers`<sup>Required</sup> <a name="RadiusServers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServers"></a>

```go
func RadiusServers() *[]*string
```

- *Type:* *[]*string

---

##### `RadiusTimeout`<sup>Required</sup> <a name="RadiusTimeout" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeout"></a>

```go
func RadiusTimeout() *f64
```

- *Type:* *f64

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecret"></a>

```go
func SharedSecret() *string
```

- *Type:* *string

---

##### `UseSameUsername`<sup>Required</sup> <a name="UseSameUsername" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsername"></a>

```go
func UseSameUsername() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceRadiusSettingsConfig <a name="DirectoryServiceRadiusSettingsConfig" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceradiussettings"

&directoryserviceradiussettings.DirectoryServiceRadiusSettingsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationProtocol: *string,
	DirectoryId: *string,
	DisplayLabel: *string,
	RadiusPort: *f64,
	RadiusRetries: *f64,
	RadiusServers: *[]*string,
	RadiusTimeout: *f64,
	SharedSecret: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts,
	UseSameUsername: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.authenticationProtocol">AuthenticationProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.displayLabel">DisplayLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusPort">RadiusPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusRetries">RadiusRetries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusServers">RadiusServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusTimeout">RadiusTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.useSameUsername">UseSameUsername</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationProtocol`<sup>Required</sup> <a name="AuthenticationProtocol" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.authenticationProtocol"></a>

```go
AuthenticationProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}.

---

##### `DisplayLabel`<sup>Required</sup> <a name="DisplayLabel" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.displayLabel"></a>

```go
DisplayLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}.

---

##### `RadiusPort`<sup>Required</sup> <a name="RadiusPort" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusPort"></a>

```go
RadiusPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}.

---

##### `RadiusRetries`<sup>Required</sup> <a name="RadiusRetries" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusRetries"></a>

```go
RadiusRetries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}.

---

##### `RadiusServers`<sup>Required</sup> <a name="RadiusServers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusServers"></a>

```go
RadiusServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}.

---

##### `RadiusTimeout`<sup>Required</sup> <a name="RadiusTimeout" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusTimeout"></a>

```go
RadiusTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}.

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.sharedSecret"></a>

```go
SharedSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.timeouts"></a>

```go
Timeouts DirectoryServiceRadiusSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#timeouts DirectoryServiceRadiusSettings#timeouts}

---

##### `UseSameUsername`<sup>Optional</sup> <a name="UseSameUsername" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.useSameUsername"></a>

```go
UseSameUsername interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}.

---

### DirectoryServiceRadiusSettingsTimeouts <a name="DirectoryServiceRadiusSettingsTimeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceradiussettings"

&directoryserviceradiussettings.DirectoryServiceRadiusSettingsTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceRadiusSettingsTimeoutsOutputReference <a name="DirectoryServiceRadiusSettingsTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceradiussettings"

directoryserviceradiussettings.NewDirectoryServiceRadiusSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryServiceRadiusSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



