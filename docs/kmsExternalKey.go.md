# `kmsExternalKey` Submodule <a name="`kmsExternalKey` Submodule" id="@cdktf/provider-aws.kmsExternalKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsExternalKey <a name="KmsExternalKey" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key aws_kms_external_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/kmsexternalkey"

kmsexternalkey.NewKmsExternalKey(scope Construct, id *string, config KmsExternalKeyConfig) KmsExternalKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig">KmsExternalKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig">KmsExternalKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetBypassPolicyLockoutSafetyCheck">ResetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDeletionWindowInDays">ResetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyMaterialBase64">ResetKeyMaterialBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetMultiRegion">ResetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetValidTo">ResetValidTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBypassPolicyLockoutSafetyCheck` <a name="ResetBypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetBypassPolicyLockoutSafetyCheck"></a>

```go
func ResetBypassPolicyLockoutSafetyCheck()
```

##### `ResetDeletionWindowInDays` <a name="ResetDeletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDeletionWindowInDays"></a>

```go
func ResetDeletionWindowInDays()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyMaterialBase64` <a name="ResetKeyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyMaterialBase64"></a>

```go
func ResetKeyMaterialBase64()
```

##### `ResetMultiRegion` <a name="ResetMultiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetMultiRegion"></a>

```go
func ResetMultiRegion()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetValidTo` <a name="ResetValidTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetValidTo"></a>

```go
func ResetValidTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsExternalKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/kmsexternalkey"

kmsexternalkey.KmsExternalKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/kmsexternalkey"

kmsexternalkey.KmsExternalKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/kmsexternalkey"

kmsexternalkey.KmsExternalKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/kmsexternalkey"

kmsexternalkey.KmsExternalKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmsExternalKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsExternalKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsExternalKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmsExternalKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.expirationModel">ExpirationModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyState">KeyState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheckInput">BypassPolicyLockoutSafetyCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDaysInput">DeletionWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64Input">KeyMaterialBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegionInput">MultiRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validToInput">ValidToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64">KeyMaterialBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegion">MultiRegion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validTo">ValidTo</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ExpirationModel`<sup>Required</sup> <a name="ExpirationModel" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.expirationModel"></a>

```go
func ExpirationModel() *string
```

- *Type:* *string

---

##### `KeyState`<sup>Required</sup> <a name="KeyState" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyState"></a>

```go
func KeyState() *string
```

- *Type:* *string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsage"></a>

```go
func KeyUsage() *string
```

- *Type:* *string

---

##### `BypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheckInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```go
func BypassPolicyLockoutSafetyCheckInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionWindowInDaysInput`<sup>Optional</sup> <a name="DeletionWindowInDaysInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDaysInput"></a>

```go
func DeletionWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyMaterialBase64Input`<sup>Optional</sup> <a name="KeyMaterialBase64Input" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64Input"></a>

```go
func KeyMaterialBase64Input() *string
```

- *Type:* *string

---

##### `MultiRegionInput`<sup>Optional</sup> <a name="MultiRegionInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegionInput"></a>

```go
func MultiRegionInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ValidToInput`<sup>Optional</sup> <a name="ValidToInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validToInput"></a>

```go
func ValidToInput() *string
```

- *Type:* *string

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheck"></a>

```go
func BypassPolicyLockoutSafetyCheck() interface{}
```

- *Type:* interface{}

---

##### `DeletionWindowInDays`<sup>Required</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDays"></a>

```go
func DeletionWindowInDays() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyMaterialBase64`<sup>Required</sup> <a name="KeyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64"></a>

```go
func KeyMaterialBase64() *string
```

- *Type:* *string

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegion"></a>

```go
func MultiRegion() interface{}
```

- *Type:* interface{}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ValidTo`<sup>Required</sup> <a name="ValidTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validTo"></a>

```go
func ValidTo() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsExternalKeyConfig <a name="KmsExternalKeyConfig" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/kmsexternalkey"

&kmsexternalkey.KmsExternalKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BypassPolicyLockoutSafetyCheck: interface{},
	DeletionWindowInDays: *f64,
	Description: *string,
	Enabled: interface{},
	Id: *string,
	KeyMaterialBase64: *string,
	MultiRegion: interface{},
	Policy: *string,
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	ValidTo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#description KmsExternalKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#enabled KmsExternalKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#id KmsExternalKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyMaterialBase64">KeyMaterialBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.multiRegion">MultiRegion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#multi_region KmsExternalKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#policy KmsExternalKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#tags KmsExternalKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#tags_all KmsExternalKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.validTo">ValidTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#valid_to KmsExternalKey#valid_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```go
BypassPolicyLockoutSafetyCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}.

---

##### `DeletionWindowInDays`<sup>Optional</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.deletionWindowInDays"></a>

```go
DeletionWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#description KmsExternalKey#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#enabled KmsExternalKey#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#id KmsExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyMaterialBase64`<sup>Optional</sup> <a name="KeyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyMaterialBase64"></a>

```go
KeyMaterialBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}.

---

##### `MultiRegion`<sup>Optional</sup> <a name="MultiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.multiRegion"></a>

```go
MultiRegion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#multi_region KmsExternalKey#multi_region}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#policy KmsExternalKey#policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#region KmsExternalKey#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#tags KmsExternalKey#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#tags_all KmsExternalKey#tags_all}.

---

##### `ValidTo`<sup>Optional</sup> <a name="ValidTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.validTo"></a>

```go
ValidTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/kms_external_key#valid_to KmsExternalKey#valid_to}.

---



