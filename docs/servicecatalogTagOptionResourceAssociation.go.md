# `servicecatalogTagOptionResourceAssociation` Submodule <a name="`servicecatalogTagOptionResourceAssociation` Submodule" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogTagOptionResourceAssociation <a name="ServicecatalogTagOptionResourceAssociation" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/servicecatalogtagoptionresourceassociation"

servicecatalogtagoptionresourceassociation.NewServicecatalogTagOptionResourceAssociation(scope Construct, id *string, config ServicecatalogTagOptionResourceAssociationConfig) ServicecatalogTagOptionResourceAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig">ServicecatalogTagOptionResourceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig">ServicecatalogTagOptionResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts"></a>

```go
func PutTimeouts(value ServicecatalogTagOptionResourceAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicecatalogTagOptionResourceAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/servicecatalogtagoptionresourceassociation"

servicecatalogtagoptionresourceassociation.ServicecatalogTagOptionResourceAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/servicecatalogtagoptionresourceassociation"

servicecatalogtagoptionresourceassociation.ServicecatalogTagOptionResourceAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/servicecatalogtagoptionresourceassociation"

servicecatalogtagoptionresourceassociation.ServicecatalogTagOptionResourceAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/servicecatalogtagoptionresourceassociation"

servicecatalogtagoptionresourceassociation.ServicecatalogTagOptionResourceAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServicecatalogTagOptionResourceAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicecatalogTagOptionResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicecatalogTagOptionResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServicecatalogTagOptionResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceCreatedTime">ResourceCreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceDescription">ResourceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference">ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionIdInput">TagOptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionId">TagOptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `ResourceCreatedTime`<sup>Required</sup> <a name="ResourceCreatedTime" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceCreatedTime"></a>

```go
func ResourceCreatedTime() *string
```

- *Type:* *string

---

##### `ResourceDescription`<sup>Required</sup> <a name="ResourceDescription" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceDescription"></a>

```go
func ResourceDescription() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeouts"></a>

```go
func Timeouts() ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference">ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `TagOptionIdInput`<sup>Optional</sup> <a name="TagOptionIdInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionIdInput"></a>

```go
func TagOptionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `TagOptionId`<sup>Required</sup> <a name="TagOptionId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionId"></a>

```go
func TagOptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogTagOptionResourceAssociationConfig <a name="ServicecatalogTagOptionResourceAssociationConfig" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/servicecatalogtagoptionresourceassociation"

&servicecatalogtagoptionresourceassociation.ServicecatalogTagOptionResourceAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceId: *string,
	TagOptionId: *string,
	Id: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.tagOptionId">TagOptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}.

---

##### `TagOptionId`<sup>Required</sup> <a name="TagOptionId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.tagOptionId"></a>

```go
TagOptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#region ServicecatalogTagOptionResourceAssociation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.timeouts"></a>

```go
Timeouts ServicecatalogTagOptionResourceAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#timeouts ServicecatalogTagOptionResourceAssociation#timeouts}

---

### ServicecatalogTagOptionResourceAssociationTimeouts <a name="ServicecatalogTagOptionResourceAssociationTimeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/servicecatalogtagoptionresourceassociation"

&servicecatalogtagoptionresourceassociation.ServicecatalogTagOptionResourceAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#create ServicecatalogTagOptionResourceAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#delete ServicecatalogTagOptionResourceAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#read ServicecatalogTagOptionResourceAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#create ServicecatalogTagOptionResourceAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#delete ServicecatalogTagOptionResourceAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/servicecatalog_tag_option_resource_association#read ServicecatalogTagOptionResourceAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference <a name="ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/servicecatalogtagoptionresourceassociation"

servicecatalogtagoptionresourceassociation.NewServicecatalogTagOptionResourceAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



