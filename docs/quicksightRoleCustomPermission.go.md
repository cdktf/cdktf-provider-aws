# `quicksightRoleCustomPermission` Submodule <a name="`quicksightRoleCustomPermission` Submodule" id="@cdktf/provider-aws.quicksightRoleCustomPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightRoleCustomPermission <a name="QuicksightRoleCustomPermission" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission aws_quicksight_role_custom_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightrolecustompermission"

quicksightrolecustompermission.NewQuicksightRoleCustomPermission(scope Construct, id *string, config QuicksightRoleCustomPermissionConfig) QuicksightRoleCustomPermission
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig">QuicksightRoleCustomPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig">QuicksightRoleCustomPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightRoleCustomPermission resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightrolecustompermission"

quicksightrolecustompermission.QuicksightRoleCustomPermission_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightrolecustompermission"

quicksightrolecustompermission.QuicksightRoleCustomPermission_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightrolecustompermission"

quicksightrolecustompermission.QuicksightRoleCustomPermission_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightrolecustompermission"

quicksightrolecustompermission.QuicksightRoleCustomPermission_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a QuicksightRoleCustomPermission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightRoleCustomPermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightRoleCustomPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightRoleCustomPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.customPermissionsNameInput">CustomPermissionsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.customPermissionsName">CustomPermissionsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `CustomPermissionsNameInput`<sup>Optional</sup> <a name="CustomPermissionsNameInput" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.customPermissionsNameInput"></a>

```go
func CustomPermissionsNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.customPermissionsName"></a>

```go
func CustomPermissionsName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermission.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightRoleCustomPermissionConfig <a name="QuicksightRoleCustomPermissionConfig" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/quicksightrolecustompermission"

&quicksightrolecustompermission.QuicksightRoleCustomPermissionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomPermissionsName: *string,
	Role: *string,
	AwsAccountId: *string,
	Namespace: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.customPermissionsName">CustomPermissionsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#custom_permissions_name QuicksightRoleCustomPermission#custom_permissions_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#role QuicksightRoleCustomPermission#role}. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#aws_account_id QuicksightRoleCustomPermission#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#namespace QuicksightRoleCustomPermission#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.customPermissionsName"></a>

```go
CustomPermissionsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#custom_permissions_name QuicksightRoleCustomPermission#custom_permissions_name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#role QuicksightRoleCustomPermission#role}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#aws_account_id QuicksightRoleCustomPermission#aws_account_id}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#namespace QuicksightRoleCustomPermission#namespace}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.quicksightRoleCustomPermission.QuicksightRoleCustomPermissionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/quicksight_role_custom_permission#region QuicksightRoleCustomPermission#region}

---



