# `vpclatticeServiceNetworkResourceAssociation` Submodule <a name="`vpclatticeServiceNetworkResourceAssociation` Submodule" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkResourceAssociation <a name="VpclatticeServiceNetworkResourceAssociation" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association aws_vpclattice_service_network_resource_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

vpclatticeservicenetworkresourceassociation.NewVpclatticeServiceNetworkResourceAssociation(scope Construct, id *string, config VpclatticeServiceNetworkResourceAssociationConfig) VpclatticeServiceNetworkResourceAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig">VpclatticeServiceNetworkResourceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig">VpclatticeServiceNetworkResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts"></a>

```go
func PutTimeouts(value VpclatticeServiceNetworkResourceAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

vpclatticeservicenetworkresourceassociation.VpclatticeServiceNetworkResourceAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

vpclatticeservicenetworkresourceassociation.VpclatticeServiceNetworkResourceAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

vpclatticeservicenetworkresourceassociation.VpclatticeServiceNetworkResourceAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

vpclatticeservicenetworkresourceassociation.VpclatticeServiceNetworkResourceAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpclatticeServiceNetworkResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpclatticeServiceNetworkResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dnsEntry">DnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList">VpclatticeServiceNetworkResourceAssociationDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifierInput">ResourceConfigurationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifierInput">ServiceNetworkIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DnsEntry`<sup>Required</sup> <a name="DnsEntry" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dnsEntry"></a>

```go
func DnsEntry() VpclatticeServiceNetworkResourceAssociationDnsEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList">VpclatticeServiceNetworkResourceAssociationDnsEntryList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeouts"></a>

```go
func Timeouts() VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference</a>

---

##### `ResourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="ResourceConfigurationIdentifierInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifierInput"></a>

```go
func ResourceConfigurationIdentifierInput() *string
```

- *Type:* *string

---

##### `ServiceNetworkIdentifierInput`<sup>Optional</sup> <a name="ServiceNetworkIdentifierInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifierInput"></a>

```go
func ServiceNetworkIdentifierInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifier"></a>

```go
func ResourceConfigurationIdentifier() *string
```

- *Type:* *string

---

##### `ServiceNetworkIdentifier`<sup>Required</sup> <a name="ServiceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifier"></a>

```go
func ServiceNetworkIdentifier() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkResourceAssociationConfig <a name="VpclatticeServiceNetworkResourceAssociationConfig" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

&vpclatticeservicenetworkresourceassociation.VpclatticeServiceNetworkResourceAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceConfigurationIdentifier: *string,
	ServiceNetworkIdentifier: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.resourceConfigurationIdentifier"></a>

```go
ResourceConfigurationIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}.

---

##### `ServiceNetworkIdentifier`<sup>Required</sup> <a name="ServiceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.serviceNetworkIdentifier"></a>

```go
ServiceNetworkIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.timeouts"></a>

```go
Timeouts VpclatticeServiceNetworkResourceAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#timeouts VpclatticeServiceNetworkResourceAssociation#timeouts}

---

### VpclatticeServiceNetworkResourceAssociationDnsEntry <a name="VpclatticeServiceNetworkResourceAssociationDnsEntry" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

&vpclatticeservicenetworkresourceassociation.VpclatticeServiceNetworkResourceAssociationDnsEntry {

}
```


### VpclatticeServiceNetworkResourceAssociationTimeouts <a name="VpclatticeServiceNetworkResourceAssociationTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

&vpclatticeservicenetworkresourceassociation.VpclatticeServiceNetworkResourceAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#create VpclatticeServiceNetworkResourceAssociation#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/vpclattice_service_network_resource_association#delete VpclatticeServiceNetworkResourceAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkResourceAssociationDnsEntryList <a name="VpclatticeServiceNetworkResourceAssociationDnsEntryList" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

vpclatticeservicenetworkresourceassociation.NewVpclatticeServiceNetworkResourceAssociationDnsEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpclatticeServiceNetworkResourceAssociationDnsEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get"></a>

```go
func Get(index *f64) VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference <a name="VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

vpclatticeservicenetworkresourceassociation.NewVpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry">VpclatticeServiceNetworkResourceAssociationDnsEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeServiceNetworkResourceAssociationDnsEntry
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry">VpclatticeServiceNetworkResourceAssociationDnsEntry</a>

---


### VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference <a name="VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticeservicenetworkresourceassociation"

vpclatticeservicenetworkresourceassociation.NewVpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



