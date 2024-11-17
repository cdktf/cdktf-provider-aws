# `s3ControlAccessGrantsLocation` Submodule <a name="`s3ControlAccessGrantsLocation` Submodule" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlAccessGrantsLocation <a name="S3ControlAccessGrantsLocation" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location aws_s3control_access_grants_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3controlaccessgrantslocation"

s3controlaccessgrantslocation.NewS3ControlAccessGrantsLocation(scope Construct, id *string, config S3ControlAccessGrantsLocationConfig) S3ControlAccessGrantsLocation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig">S3ControlAccessGrantsLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig">S3ControlAccessGrantsLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3ControlAccessGrantsLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3controlaccessgrantslocation"

s3controlaccessgrantslocation.S3ControlAccessGrantsLocation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3controlaccessgrantslocation"

s3controlaccessgrantslocation.S3ControlAccessGrantsLocation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3controlaccessgrantslocation"

s3controlaccessgrantslocation.S3ControlAccessGrantsLocation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3controlaccessgrantslocation"

s3controlaccessgrantslocation.S3ControlAccessGrantsLocation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a S3ControlAccessGrantsLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3ControlAccessGrantsLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3ControlAccessGrantsLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlAccessGrantsLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accessGrantsLocationArn">AccessGrantsLocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accessGrantsLocationId">AccessGrantsLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.locationScopeInput">LocationScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.locationScope">LocationScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessGrantsLocationArn`<sup>Required</sup> <a name="AccessGrantsLocationArn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accessGrantsLocationArn"></a>

```go
func AccessGrantsLocationArn() *string
```

- *Type:* *string

---

##### `AccessGrantsLocationId`<sup>Required</sup> <a name="AccessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accessGrantsLocationId"></a>

```go
func AccessGrantsLocationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `LocationScopeInput`<sup>Optional</sup> <a name="LocationScopeInput" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.locationScopeInput"></a>

```go
func LocationScopeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `LocationScope`<sup>Required</sup> <a name="LocationScope" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.locationScope"></a>

```go
func LocationScope() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlAccessGrantsLocationConfig <a name="S3ControlAccessGrantsLocationConfig" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3controlaccessgrantslocation"

&s3controlaccessgrantslocation.S3ControlAccessGrantsLocationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IamRoleArn: *string,
	LocationScope: *string,
	AccountId: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#iam_role_arn S3ControlAccessGrantsLocation#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.locationScope">LocationScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#location_scope S3ControlAccessGrantsLocation#location_scope}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#account_id S3ControlAccessGrantsLocation#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#tags S3ControlAccessGrantsLocation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#iam_role_arn S3ControlAccessGrantsLocation#iam_role_arn}.

---

##### `LocationScope`<sup>Required</sup> <a name="LocationScope" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.locationScope"></a>

```go
LocationScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#location_scope S3ControlAccessGrantsLocation#location_scope}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#account_id S3ControlAccessGrantsLocation#account_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3ControlAccessGrantsLocation.S3ControlAccessGrantsLocationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/s3control_access_grants_location#tags S3ControlAccessGrantsLocation#tags}.

---



