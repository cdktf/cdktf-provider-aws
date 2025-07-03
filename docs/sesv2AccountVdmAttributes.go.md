# `sesv2AccountVdmAttributes` Submodule <a name="`sesv2AccountVdmAttributes` Submodule" id="@cdktf/provider-aws.sesv2AccountVdmAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2AccountVdmAttributes <a name="Sesv2AccountVdmAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes aws_sesv2_account_vdm_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

sesv2accountvdmattributes.NewSesv2AccountVdmAttributes(scope Construct, id *string, config Sesv2AccountVdmAttributesConfig) Sesv2AccountVdmAttributes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig">Sesv2AccountVdmAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig">Sesv2AccountVdmAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes">PutDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes">PutGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetDashboardAttributes">ResetDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetGuardianAttributes">ResetGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDashboardAttributes` <a name="PutDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes"></a>

```go
func PutDashboardAttributes(value Sesv2AccountVdmAttributesDashboardAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---

##### `PutGuardianAttributes` <a name="PutGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes"></a>

```go
func PutGuardianAttributes(value Sesv2AccountVdmAttributesGuardianAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---

##### `ResetDashboardAttributes` <a name="ResetDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetDashboardAttributes"></a>

```go
func ResetDashboardAttributes()
```

##### `ResetGuardianAttributes` <a name="ResetGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetGuardianAttributes"></a>

```go
func ResetGuardianAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Sesv2AccountVdmAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

sesv2accountvdmattributes.Sesv2AccountVdmAttributes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

sesv2accountvdmattributes.Sesv2AccountVdmAttributes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

sesv2accountvdmattributes.Sesv2AccountVdmAttributes_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

sesv2accountvdmattributes.Sesv2AccountVdmAttributes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Sesv2AccountVdmAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Sesv2AccountVdmAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Sesv2AccountVdmAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Sesv2AccountVdmAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributes">DashboardAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference">Sesv2AccountVdmAttributesDashboardAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributes">GuardianAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference">Sesv2AccountVdmAttributesGuardianAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributesInput">DashboardAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributesInput">GuardianAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabledInput">VdmEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabled">VdmEnabled</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DashboardAttributes`<sup>Required</sup> <a name="DashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributes"></a>

```go
func DashboardAttributes() Sesv2AccountVdmAttributesDashboardAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference">Sesv2AccountVdmAttributesDashboardAttributesOutputReference</a>

---

##### `GuardianAttributes`<sup>Required</sup> <a name="GuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributes"></a>

```go
func GuardianAttributes() Sesv2AccountVdmAttributesGuardianAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference">Sesv2AccountVdmAttributesGuardianAttributesOutputReference</a>

---

##### `DashboardAttributesInput`<sup>Optional</sup> <a name="DashboardAttributesInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributesInput"></a>

```go
func DashboardAttributesInput() Sesv2AccountVdmAttributesDashboardAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---

##### `GuardianAttributesInput`<sup>Optional</sup> <a name="GuardianAttributesInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributesInput"></a>

```go
func GuardianAttributesInput() Sesv2AccountVdmAttributesGuardianAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VdmEnabledInput`<sup>Optional</sup> <a name="VdmEnabledInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabledInput"></a>

```go
func VdmEnabledInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `VdmEnabled`<sup>Required</sup> <a name="VdmEnabled" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabled"></a>

```go
func VdmEnabled() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2AccountVdmAttributesConfig <a name="Sesv2AccountVdmAttributesConfig" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

&sesv2accountvdmattributes.Sesv2AccountVdmAttributesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VdmEnabled: *string,
	DashboardAttributes: github.com/cdktf/cdktf-provider-aws-go/aws/v21.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes,
	GuardianAttributes: github.com/cdktf/cdktf-provider-aws-go/aws/v21.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.vdmEnabled">VdmEnabled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dashboardAttributes">DashboardAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | dashboard_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.guardianAttributes">GuardianAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | guardian_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VdmEnabled`<sup>Required</sup> <a name="VdmEnabled" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.vdmEnabled"></a>

```go
VdmEnabled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}.

---

##### `DashboardAttributes`<sup>Optional</sup> <a name="DashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dashboardAttributes"></a>

```go
DashboardAttributes Sesv2AccountVdmAttributesDashboardAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

dashboard_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#dashboard_attributes Sesv2AccountVdmAttributes#dashboard_attributes}

---

##### `GuardianAttributes`<sup>Optional</sup> <a name="GuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.guardianAttributes"></a>

```go
GuardianAttributes Sesv2AccountVdmAttributesGuardianAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

guardian_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#guardian_attributes Sesv2AccountVdmAttributes#guardian_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#region Sesv2AccountVdmAttributes#region}

---

### Sesv2AccountVdmAttributesDashboardAttributes <a name="Sesv2AccountVdmAttributesDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

&sesv2accountvdmattributes.Sesv2AccountVdmAttributesDashboardAttributes {
	EngagementMetrics: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.property.engagementMetrics">EngagementMetrics</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}. |

---

##### `EngagementMetrics`<sup>Optional</sup> <a name="EngagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.property.engagementMetrics"></a>

```go
EngagementMetrics *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}.

---

### Sesv2AccountVdmAttributesGuardianAttributes <a name="Sesv2AccountVdmAttributesGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

&sesv2accountvdmattributes.Sesv2AccountVdmAttributesGuardianAttributes {
	OptimizedSharedDelivery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}. |

---

##### `OptimizedSharedDelivery`<sup>Optional</sup> <a name="OptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.property.optimizedSharedDelivery"></a>

```go
OptimizedSharedDelivery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2AccountVdmAttributesDashboardAttributesOutputReference <a name="Sesv2AccountVdmAttributesDashboardAttributesOutputReference" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

sesv2accountvdmattributes.NewSesv2AccountVdmAttributesDashboardAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Sesv2AccountVdmAttributesDashboardAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics">ResetEngagementMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEngagementMetrics` <a name="ResetEngagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics"></a>

```go
func ResetEngagementMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput">EngagementMetricsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics">EngagementMetrics</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngagementMetricsInput`<sup>Optional</sup> <a name="EngagementMetricsInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput"></a>

```go
func EngagementMetricsInput() *string
```

- *Type:* *string

---

##### `EngagementMetrics`<sup>Required</sup> <a name="EngagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics"></a>

```go
func EngagementMetrics() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() Sesv2AccountVdmAttributesDashboardAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---


### Sesv2AccountVdmAttributesGuardianAttributesOutputReference <a name="Sesv2AccountVdmAttributesGuardianAttributesOutputReference" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sesv2accountvdmattributes"

sesv2accountvdmattributes.NewSesv2AccountVdmAttributesGuardianAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Sesv2AccountVdmAttributesGuardianAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery">ResetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptimizedSharedDelivery` <a name="ResetOptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery"></a>

```go
func ResetOptimizedSharedDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput">OptimizedSharedDeliveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptimizedSharedDeliveryInput`<sup>Optional</sup> <a name="OptimizedSharedDeliveryInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput"></a>

```go
func OptimizedSharedDeliveryInput() *string
```

- *Type:* *string

---

##### `OptimizedSharedDelivery`<sup>Required</sup> <a name="OptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery"></a>

```go
func OptimizedSharedDelivery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() Sesv2AccountVdmAttributesGuardianAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---



