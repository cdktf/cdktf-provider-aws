# `pinpointsmsvoicev2OptOutList` Submodule <a name="`pinpointsmsvoicev2OptOutList` Submodule" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2OptOutList <a name="Pinpointsmsvoicev2OptOutList" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/pinpointsmsvoicev2_opt_out_list aws_pinpointsmsvoicev2_opt_out_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/pinpointsmsvoicev2optoutlist"

pinpointsmsvoicev2optoutlist.NewPinpointsmsvoicev2OptOutList(scope Construct, id *string, config Pinpointsmsvoicev2OptOutListConfig) Pinpointsmsvoicev2OptOutList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig">Pinpointsmsvoicev2OptOutListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig">Pinpointsmsvoicev2OptOutListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Pinpointsmsvoicev2OptOutList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/pinpointsmsvoicev2optoutlist"

pinpointsmsvoicev2optoutlist.Pinpointsmsvoicev2OptOutList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/pinpointsmsvoicev2optoutlist"

pinpointsmsvoicev2optoutlist.Pinpointsmsvoicev2OptOutList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/pinpointsmsvoicev2optoutlist"

pinpointsmsvoicev2optoutlist.Pinpointsmsvoicev2OptOutList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/pinpointsmsvoicev2optoutlist"

pinpointsmsvoicev2optoutlist.Pinpointsmsvoicev2OptOutList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Pinpointsmsvoicev2OptOutList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Pinpointsmsvoicev2OptOutList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Pinpointsmsvoicev2OptOutList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/pinpointsmsvoicev2_opt_out_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2OptOutList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2OptOutListConfig <a name="Pinpointsmsvoicev2OptOutListConfig" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/pinpointsmsvoicev2optoutlist"

&pinpointsmsvoicev2optoutlist.Pinpointsmsvoicev2OptOutListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/pinpointsmsvoicev2_opt_out_list#name Pinpointsmsvoicev2OptOutList#name}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/pinpointsmsvoicev2_opt_out_list#tags Pinpointsmsvoicev2OptOutList#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/pinpointsmsvoicev2_opt_out_list#name Pinpointsmsvoicev2OptOutList#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.pinpointsmsvoicev2OptOutList.Pinpointsmsvoicev2OptOutListConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/pinpointsmsvoicev2_opt_out_list#tags Pinpointsmsvoicev2OptOutList#tags}.

---



