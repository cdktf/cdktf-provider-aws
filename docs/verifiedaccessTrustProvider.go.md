# `aws_verifiedaccess_trust_provider`

Refer to the Terraform Registory for docs: [`aws_verifiedaccess_trust_provider`](https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider).

# `verifiedaccessTrustProvider` Submodule <a name="`verifiedaccessTrustProvider` Submodule" id="@cdktf/provider-aws.verifiedaccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessTrustProvider <a name="VerifiedaccessTrustProvider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider aws_verifiedaccess_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

verifiedaccesstrustprovider.NewVerifiedaccessTrustProvider(scope Construct, id *string, config VerifiedaccessTrustProviderConfig) VerifiedaccessTrustProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig">VerifiedaccessTrustProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig">VerifiedaccessTrustProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions">PutDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions">PutOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceOptions">ResetDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceTrustProviderType">ResetDeviceTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOidcOptions">ResetOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetUserTrustProviderType">ResetUserTrustProviderType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutDeviceOptions` <a name="PutDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions"></a>

```go
func PutDeviceOptions(value VerifiedaccessTrustProviderDeviceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---

##### `PutOidcOptions` <a name="PutOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions"></a>

```go
func PutOidcOptions(value VerifiedaccessTrustProviderOidcOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts"></a>

```go
func PutTimeouts(value VerifiedaccessTrustProviderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeviceOptions` <a name="ResetDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceOptions"></a>

```go
func ResetDeviceOptions()
```

##### `ResetDeviceTrustProviderType` <a name="ResetDeviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceTrustProviderType"></a>

```go
func ResetDeviceTrustProviderType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetOidcOptions` <a name="ResetOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOidcOptions"></a>

```go
func ResetOidcOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserTrustProviderType` <a name="ResetUserTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetUserTrustProviderType"></a>

```go
func ResetUserTrustProviderType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

verifiedaccesstrustprovider.VerifiedaccessTrustProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

verifiedaccesstrustprovider.VerifiedaccessTrustProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

verifiedaccesstrustprovider.VerifiedaccessTrustProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

verifiedaccesstrustprovider.VerifiedaccessTrustProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VerifiedaccessTrustProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VerifiedaccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptions">DeviceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference">VerifiedaccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptions">OidcOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference">VerifiedaccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference">VerifiedaccessTrustProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptionsInput">DeviceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderTypeInput">DeviceTrustProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptionsInput">OidcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceNameInput">PolicyReferenceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderTypeInput">TrustProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderTypeInput">UserTrustProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceName">PolicyReferenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderType">TrustProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeviceOptions`<sup>Required</sup> <a name="DeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptions"></a>

```go
func DeviceOptions() VerifiedaccessTrustProviderDeviceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference">VerifiedaccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `OidcOptions`<sup>Required</sup> <a name="OidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptions"></a>

```go
func OidcOptions() VerifiedaccessTrustProviderOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference">VerifiedaccessTrustProviderOidcOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeouts"></a>

```go
func Timeouts() VerifiedaccessTrustProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference">VerifiedaccessTrustProviderTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeviceOptionsInput`<sup>Optional</sup> <a name="DeviceOptionsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptionsInput"></a>

```go
func DeviceOptionsInput() VerifiedaccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---

##### `DeviceTrustProviderTypeInput`<sup>Optional</sup> <a name="DeviceTrustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderTypeInput"></a>

```go
func DeviceTrustProviderTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OidcOptionsInput`<sup>Optional</sup> <a name="OidcOptionsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptionsInput"></a>

```go
func OidcOptionsInput() VerifiedaccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---

##### `PolicyReferenceNameInput`<sup>Optional</sup> <a name="PolicyReferenceNameInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceNameInput"></a>

```go
func PolicyReferenceNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustProviderTypeInput`<sup>Optional</sup> <a name="TrustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderTypeInput"></a>

```go
func TrustProviderTypeInput() *string
```

- *Type:* *string

---

##### `UserTrustProviderTypeInput`<sup>Optional</sup> <a name="UserTrustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderTypeInput"></a>

```go
func UserTrustProviderTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceTrustProviderType`<sup>Required</sup> <a name="DeviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderType"></a>

```go
func DeviceTrustProviderType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyReferenceName`<sup>Required</sup> <a name="PolicyReferenceName" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceName"></a>

```go
func PolicyReferenceName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderType"></a>

```go
func TrustProviderType() *string
```

- *Type:* *string

---

##### `UserTrustProviderType`<sup>Required</sup> <a name="UserTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderType"></a>

```go
func UserTrustProviderType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessTrustProviderConfig <a name="VerifiedaccessTrustProviderConfig" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

&verifiedaccesstrustprovider.VerifiedaccessTrustProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyReferenceName: *string,
	TrustProviderType: *string,
	Description: *string,
	DeviceOptions: github.com/cdktf/cdktf-provider-aws-go/aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions,
	DeviceTrustProviderType: *string,
	Id: *string,
	OidcOptions: github.com/cdktf/cdktf-provider-aws-go/aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts,
	UserTrustProviderType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.policyReferenceName">PolicyReferenceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.trustProviderType">TrustProviderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceOptions">DeviceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | device_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.oidcOptions">OidcOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | oidc_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyReferenceName`<sup>Required</sup> <a name="PolicyReferenceName" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.policyReferenceName"></a>

```go
PolicyReferenceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}.

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.trustProviderType"></a>

```go
TrustProviderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}.

---

##### `DeviceOptions`<sup>Optional</sup> <a name="DeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceOptions"></a>

```go
DeviceOptions VerifiedaccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

device_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#device_options VerifiedaccessTrustProvider#device_options}

---

##### `DeviceTrustProviderType`<sup>Optional</sup> <a name="DeviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceTrustProviderType"></a>

```go
DeviceTrustProviderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OidcOptions`<sup>Optional</sup> <a name="OidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.oidcOptions"></a>

```go
OidcOptions VerifiedaccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

oidc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#oidc_options VerifiedaccessTrustProvider#oidc_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.timeouts"></a>

```go
Timeouts VerifiedaccessTrustProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#timeouts VerifiedaccessTrustProvider#timeouts}

---

##### `UserTrustProviderType`<sup>Optional</sup> <a name="UserTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.userTrustProviderType"></a>

```go
UserTrustProviderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}.

---

### VerifiedaccessTrustProviderDeviceOptions <a name="VerifiedaccessTrustProviderDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

&verifiedaccesstrustprovider.VerifiedaccessTrustProviderDeviceOptions {
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}. |

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}.

---

### VerifiedaccessTrustProviderOidcOptions <a name="VerifiedaccessTrustProviderOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

&verifiedaccesstrustprovider.VerifiedaccessTrustProviderOidcOptions {
	ClientSecret: *string,
	AuthorizationEndpoint: *string,
	ClientId: *string,
	Issuer: *string,
	Scope: *string,
	TokenEndpoint: *string,
	UserInfoEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}. |

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}.

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}.

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}.

---

##### `UserInfoEndpoint`<sup>Optional</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}.

---

### VerifiedaccessTrustProviderTimeouts <a name="VerifiedaccessTrustProviderTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

&verifiedaccesstrustprovider.VerifiedaccessTrustProviderTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessTrustProviderDeviceOptionsOutputReference <a name="VerifiedaccessTrustProviderDeviceOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

verifiedaccesstrustprovider.NewVerifiedaccessTrustProviderDeviceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessTrustProviderDeviceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedaccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---


### VerifiedaccessTrustProviderOidcOptionsOutputReference <a name="VerifiedaccessTrustProviderOidcOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

verifiedaccesstrustprovider.NewVerifiedaccessTrustProviderOidcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessTrustProviderOidcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint">ResetUserInfoEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```go
func ResetAuthorizationEndpoint()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint"></a>

```go
func ResetTokenEndpoint()
```

##### `ResetUserInfoEndpoint` <a name="ResetUserInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```go
func ResetUserInfoEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedaccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---


### VerifiedaccessTrustProviderTimeoutsOutputReference <a name="VerifiedaccessTrustProviderTimeoutsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedaccesstrustprovider"

verifiedaccesstrustprovider.NewVerifiedaccessTrustProviderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedaccessTrustProviderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



