# `s3ControlAccessGrant` Submodule <a name="`s3ControlAccessGrant` Submodule" id="@cdktf/provider-aws.s3ControlAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlAccessGrant <a name="S3ControlAccessGrant" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant aws_s3control_access_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.NewS3ControlAccessGrant(scope Construct, id *string, config S3ControlAccessGrantConfig) S3ControlAccessGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig">S3ControlAccessGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig">S3ControlAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration">PutAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee">PutGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccessGrantsLocationConfiguration">ResetAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetGrantee">ResetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetS3PrefixType">ResetS3PrefixType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessGrantsLocationConfiguration` <a name="PutAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration"></a>

```go
func PutAccessGrantsLocationConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGrantee` <a name="PutGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee"></a>

```go
func PutGrantee(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessGrantsLocationConfiguration` <a name="ResetAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccessGrantsLocationConfiguration"></a>

```go
func ResetAccessGrantsLocationConfiguration()
```

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetGrantee` <a name="ResetGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetGrantee"></a>

```go
func ResetGrantee()
```

##### `ResetS3PrefixType` <a name="ResetS3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetS3PrefixType"></a>

```go
func ResetS3PrefixType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.S3ControlAccessGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.S3ControlAccessGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.S3ControlAccessGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.S3ControlAccessGrant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3ControlAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3ControlAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantArn">AccessGrantArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantId">AccessGrantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfiguration">AccessGrantsLocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList">S3ControlAccessGrantAccessGrantsLocationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantee">Grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList">S3ControlAccessGrantGranteeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantScope">GrantScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfigurationInput">AccessGrantsLocationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationIdInput">AccessGrantsLocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.granteeInput">GranteeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixTypeInput">S3PrefixTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationId">AccessGrantsLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixType">S3PrefixType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessGrantArn`<sup>Required</sup> <a name="AccessGrantArn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantArn"></a>

```go
func AccessGrantArn() *string
```

- *Type:* *string

---

##### `AccessGrantId`<sup>Required</sup> <a name="AccessGrantId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantId"></a>

```go
func AccessGrantId() *string
```

- *Type:* *string

---

##### `AccessGrantsLocationConfiguration`<sup>Required</sup> <a name="AccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfiguration"></a>

```go
func AccessGrantsLocationConfiguration() S3ControlAccessGrantAccessGrantsLocationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList">S3ControlAccessGrantAccessGrantsLocationConfigurationList</a>

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantee"></a>

```go
func Grantee() S3ControlAccessGrantGranteeList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList">S3ControlAccessGrantGranteeList</a>

---

##### `GrantScope`<sup>Required</sup> <a name="GrantScope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantScope"></a>

```go
func GrantScope() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AccessGrantsLocationConfigurationInput`<sup>Optional</sup> <a name="AccessGrantsLocationConfigurationInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfigurationInput"></a>

```go
func AccessGrantsLocationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AccessGrantsLocationIdInput`<sup>Optional</sup> <a name="AccessGrantsLocationIdInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationIdInput"></a>

```go
func AccessGrantsLocationIdInput() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.granteeInput"></a>

```go
func GranteeInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `S3PrefixTypeInput`<sup>Optional</sup> <a name="S3PrefixTypeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixTypeInput"></a>

```go
func S3PrefixTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AccessGrantsLocationId`<sup>Required</sup> <a name="AccessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationId"></a>

```go
func AccessGrantsLocationId() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `S3PrefixType`<sup>Required</sup> <a name="S3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixType"></a>

```go
func S3PrefixType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlAccessGrantAccessGrantsLocationConfiguration <a name="S3ControlAccessGrantAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

&s3controlaccessgrant.S3ControlAccessGrantAccessGrantsLocationConfiguration {
	S3SubPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix">S3SubPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}. |

---

##### `S3SubPrefix`<sup>Optional</sup> <a name="S3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix"></a>

```go
S3SubPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}.

---

### S3ControlAccessGrantConfig <a name="S3ControlAccessGrantConfig" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

&s3controlaccessgrant.S3ControlAccessGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessGrantsLocationId: *string,
	Permission: *string,
	AccessGrantsLocationConfiguration: interface{},
	AccountId: *string,
	Grantee: interface{},
	S3PrefixType: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationId">AccessGrantsLocationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationConfiguration">AccessGrantsLocationConfiguration</a></code> | <code>interface{}</code> | access_grants_location_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.grantee">Grantee</a></code> | <code>interface{}</code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.s3PrefixType">S3PrefixType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessGrantsLocationId`<sup>Required</sup> <a name="AccessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationId"></a>

```go
AccessGrantsLocationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}.

---

##### `AccessGrantsLocationConfiguration`<sup>Optional</sup> <a name="AccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationConfiguration"></a>

```go
AccessGrantsLocationConfiguration interface{}
```

- *Type:* interface{}

access_grants_location_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#access_grants_location_configuration S3ControlAccessGrant#access_grants_location_configuration}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}.

---

##### `Grantee`<sup>Optional</sup> <a name="Grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.grantee"></a>

```go
Grantee interface{}
```

- *Type:* interface{}

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#grantee S3ControlAccessGrant#grantee}

---

##### `S3PrefixType`<sup>Optional</sup> <a name="S3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.s3PrefixType"></a>

```go
S3PrefixType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}.

---

### S3ControlAccessGrantGrantee <a name="S3ControlAccessGrantGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

&s3controlaccessgrant.S3ControlAccessGrantGrantee {
	GranteeIdentifier: *string,
	GranteeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeIdentifier">GranteeIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeType">GranteeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}. |

---

##### `GranteeIdentifier`<sup>Required</sup> <a name="GranteeIdentifier" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeIdentifier"></a>

```go
GranteeIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}.

---

##### `GranteeType`<sup>Required</sup> <a name="GranteeType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeType"></a>

```go
GranteeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlAccessGrantAccessGrantsLocationConfigurationList <a name="S3ControlAccessGrantAccessGrantsLocationConfigurationList" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.NewS3ControlAccessGrantAccessGrantsLocationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ControlAccessGrantAccessGrantsLocationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get"></a>

```go
func Get(index *f64) S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference <a name="S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.NewS3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix">ResetS3SubPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3SubPrefix` <a name="ResetS3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix"></a>

```go
func ResetS3SubPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput">S3SubPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix">S3SubPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3SubPrefixInput`<sup>Optional</sup> <a name="S3SubPrefixInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput"></a>

```go
func S3SubPrefixInput() *string
```

- *Type:* *string

---

##### `S3SubPrefix`<sup>Required</sup> <a name="S3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix"></a>

```go
func S3SubPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ControlAccessGrantGranteeList <a name="S3ControlAccessGrantGranteeList" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.NewS3ControlAccessGrantGranteeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ControlAccessGrantGranteeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get"></a>

```go
func Get(index *f64) S3ControlAccessGrantGranteeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ControlAccessGrantGranteeOutputReference <a name="S3ControlAccessGrantGranteeOutputReference" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/s3controlaccessgrant"

s3controlaccessgrant.NewS3ControlAccessGrantGranteeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ControlAccessGrantGranteeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifierInput">GranteeIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeTypeInput">GranteeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifier">GranteeIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeType">GranteeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranteeIdentifierInput`<sup>Optional</sup> <a name="GranteeIdentifierInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifierInput"></a>

```go
func GranteeIdentifierInput() *string
```

- *Type:* *string

---

##### `GranteeTypeInput`<sup>Optional</sup> <a name="GranteeTypeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeTypeInput"></a>

```go
func GranteeTypeInput() *string
```

- *Type:* *string

---

##### `GranteeIdentifier`<sup>Required</sup> <a name="GranteeIdentifier" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifier"></a>

```go
func GranteeIdentifier() *string
```

- *Type:* *string

---

##### `GranteeType`<sup>Required</sup> <a name="GranteeType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeType"></a>

```go
func GranteeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



