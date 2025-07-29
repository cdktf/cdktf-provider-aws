# `vpcEndpointServiceAllowedPrincipal` Submodule <a name="`vpcEndpointServiceAllowedPrincipal` Submodule" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointServiceAllowedPrincipal <a name="VpcEndpointServiceAllowedPrincipal" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal aws_vpc_endpoint_service_allowed_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/vpcendpointserviceallowedprincipal"

vpcendpointserviceallowedprincipal.NewVpcEndpointServiceAllowedPrincipal(scope Construct, id *string, config VpcEndpointServiceAllowedPrincipalConfig) VpcEndpointServiceAllowedPrincipal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig">VpcEndpointServiceAllowedPrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig">VpcEndpointServiceAllowedPrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcEndpointServiceAllowedPrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/vpcendpointserviceallowedprincipal"

vpcendpointserviceallowedprincipal.VpcEndpointServiceAllowedPrincipal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/vpcendpointserviceallowedprincipal"

vpcendpointserviceallowedprincipal.VpcEndpointServiceAllowedPrincipal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/vpcendpointserviceallowedprincipal"

vpcendpointserviceallowedprincipal.VpcEndpointServiceAllowedPrincipal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/vpcendpointserviceallowedprincipal"

vpcendpointserviceallowedprincipal.VpcEndpointServiceAllowedPrincipal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpcEndpointServiceAllowedPrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpcEndpointServiceAllowedPrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpcEndpointServiceAllowedPrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpcEndpointServiceAllowedPrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.principalArnInput">PrincipalArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.vpcEndpointServiceIdInput">VpcEndpointServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalArnInput`<sup>Optional</sup> <a name="PrincipalArnInput" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.principalArnInput"></a>

```go
func PrincipalArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VpcEndpointServiceIdInput`<sup>Optional</sup> <a name="VpcEndpointServiceIdInput" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.vpcEndpointServiceIdInput"></a>

```go
func VpcEndpointServiceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.principalArn"></a>

```go
func PrincipalArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `VpcEndpointServiceId`<sup>Required</sup> <a name="VpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.vpcEndpointServiceId"></a>

```go
func VpcEndpointServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointServiceAllowedPrincipalConfig <a name="VpcEndpointServiceAllowedPrincipalConfig" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/vpcendpointserviceallowedprincipal"

&vpcendpointserviceallowedprincipal.VpcEndpointServiceAllowedPrincipalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrincipalArn: *string,
	VpcEndpointServiceId: *string,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal#principal_arn VpcEndpointServiceAllowedPrincipal#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal#vpc_endpoint_service_id VpcEndpointServiceAllowedPrincipal#vpc_endpoint_service_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal#id VpcEndpointServiceAllowedPrincipal#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.principalArn"></a>

```go
PrincipalArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal#principal_arn VpcEndpointServiceAllowedPrincipal#principal_arn}.

---

##### `VpcEndpointServiceId`<sup>Required</sup> <a name="VpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.vpcEndpointServiceId"></a>

```go
VpcEndpointServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal#vpc_endpoint_service_id VpcEndpointServiceAllowedPrincipal#vpc_endpoint_service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal#id VpcEndpointServiceAllowedPrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_endpoint_service_allowed_principal#region VpcEndpointServiceAllowedPrincipal#region}

---



