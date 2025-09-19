# `s3ControlDirectoryBucketAccessPointScope` Submodule <a name="`s3ControlDirectoryBucketAccessPointScope` Submodule" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlDirectoryBucketAccessPointScope <a name="S3ControlDirectoryBucketAccessPointScope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope aws_s3control_directory_bucket_access_point_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

s3controldirectorybucketaccesspointscope.NewS3ControlDirectoryBucketAccessPointScope(scope Construct, id *string, config S3ControlDirectoryBucketAccessPointScopeConfig) S3ControlDirectoryBucketAccessPointScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig">S3ControlDirectoryBucketAccessPointScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig">S3ControlDirectoryBucketAccessPointScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope"></a>

```go
func PutScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetScope"></a>

```go
func ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3ControlDirectoryBucketAccessPointScope resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

s3controldirectorybucketaccesspointscope.S3ControlDirectoryBucketAccessPointScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

s3controldirectorybucketaccesspointscope.S3ControlDirectoryBucketAccessPointScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

s3controldirectorybucketaccesspointscope.S3ControlDirectoryBucketAccessPointScope_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

s3controldirectorybucketaccesspointscope.S3ControlDirectoryBucketAccessPointScope_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a S3ControlDirectoryBucketAccessPointScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3ControlDirectoryBucketAccessPointScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3ControlDirectoryBucketAccessPointScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlDirectoryBucketAccessPointScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList">S3ControlDirectoryBucketAccessPointScopeScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scopeInput">ScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scope"></a>

```go
func Scope() S3ControlDirectoryBucketAccessPointScopeScopeList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList">S3ControlDirectoryBucketAccessPointScopeScopeList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scopeInput"></a>

```go
func ScopeInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlDirectoryBucketAccessPointScopeConfig <a name="S3ControlDirectoryBucketAccessPointScopeConfig" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

&s3controldirectorybucketaccesspointscope.S3ControlDirectoryBucketAccessPointScopeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Region: *string,
	Scope: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.scope">Scope</a></code> | <code>interface{}</code> | scope block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#region S3ControlDirectoryBucketAccessPointScope#region}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.scope"></a>

```go
Scope interface{}
```

- *Type:* interface{}

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#scope S3ControlDirectoryBucketAccessPointScope#scope}

---

### S3ControlDirectoryBucketAccessPointScopeScope <a name="S3ControlDirectoryBucketAccessPointScopeScope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

&s3controldirectorybucketaccesspointscope.S3ControlDirectoryBucketAccessPointScopeScope {
	Permissions: *[]*string,
	Prefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.permissions">Permissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#permissions S3ControlDirectoryBucketAccessPointScope#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.prefixes">Prefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#prefixes S3ControlDirectoryBucketAccessPointScope#prefixes}. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#permissions S3ControlDirectoryBucketAccessPointScope#permissions}.

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.prefixes"></a>

```go
Prefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/s3control_directory_bucket_access_point_scope#prefixes S3ControlDirectoryBucketAccessPointScope#prefixes}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlDirectoryBucketAccessPointScopeScopeList <a name="S3ControlDirectoryBucketAccessPointScopeScopeList" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

s3controldirectorybucketaccesspointscope.NewS3ControlDirectoryBucketAccessPointScopeScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ControlDirectoryBucketAccessPointScopeScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get"></a>

```go
func Get(index *f64) S3ControlDirectoryBucketAccessPointScopeScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ControlDirectoryBucketAccessPointScopeScopeOutputReference <a name="S3ControlDirectoryBucketAccessPointScopeScopeOutputReference" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/s3controldirectorybucketaccesspointscope"

s3controldirectorybucketaccesspointscope.NewS3ControlDirectoryBucketAccessPointScopeScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ControlDirectoryBucketAccessPointScopeScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPrefixes"></a>

```go
func ResetPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixes">Prefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixesInput"></a>

```go
func PrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixes"></a>

```go
func Prefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



