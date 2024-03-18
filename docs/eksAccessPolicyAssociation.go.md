# `eksAccessPolicyAssociation` Submodule <a name="`eksAccessPolicyAssociation` Submodule" id="@cdktf/provider-aws.eksAccessPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksAccessPolicyAssociation <a name="EksAccessPolicyAssociation" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association aws_eks_access_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

eksaccesspolicyassociation.NewEksAccessPolicyAssociation(scope Construct, id *string, config EksAccessPolicyAssociationConfig) EksAccessPolicyAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig">EksAccessPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig">EksAccessPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope">PutAccessScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessScope` <a name="PutAccessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope"></a>

```go
func PutAccessScope(value EksAccessPolicyAssociationAccessScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts"></a>

```go
func PutTimeouts(value EksAccessPolicyAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EksAccessPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

eksaccesspolicyassociation.EksAccessPolicyAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

eksaccesspolicyassociation.EksAccessPolicyAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

eksaccesspolicyassociation.EksAccessPolicyAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

eksaccesspolicyassociation.EksAccessPolicyAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EksAccessPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EksAccessPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EksAccessPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EksAccessPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScope">AccessScope</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference">EksAccessPolicyAssociationAccessScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.associatedAt">AssociatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference">EksAccessPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScopeInput">AccessScopeInput</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArnInput">PolicyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArnInput">PrincipalArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessScope`<sup>Required</sup> <a name="AccessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScope"></a>

```go
func AccessScope() EksAccessPolicyAssociationAccessScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference">EksAccessPolicyAssociationAccessScopeOutputReference</a>

---

##### `AssociatedAt`<sup>Required</sup> <a name="AssociatedAt" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.associatedAt"></a>

```go
func AssociatedAt() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeouts"></a>

```go
func Timeouts() EksAccessPolicyAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference">EksAccessPolicyAssociationTimeoutsOutputReference</a>

---

##### `AccessScopeInput`<sup>Optional</sup> <a name="AccessScopeInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScopeInput"></a>

```go
func AccessScopeInput() EksAccessPolicyAssociationAccessScope
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArnInput"></a>

```go
func PolicyArnInput() *string
```

- *Type:* *string

---

##### `PrincipalArnInput`<sup>Optional</sup> <a name="PrincipalArnInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArnInput"></a>

```go
func PrincipalArnInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArn"></a>

```go
func PrincipalArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EksAccessPolicyAssociationAccessScope <a name="EksAccessPolicyAssociationAccessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

&eksaccesspolicyassociation.EksAccessPolicyAssociationAccessScope {
	Type: *string,
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#type EksAccessPolicyAssociation#type}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#namespaces EksAccessPolicyAssociation#namespaces}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#type EksAccessPolicyAssociation#type}.

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#namespaces EksAccessPolicyAssociation#namespaces}.

---

### EksAccessPolicyAssociationConfig <a name="EksAccessPolicyAssociationConfig" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

&eksaccesspolicyassociation.EksAccessPolicyAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessScope: github.com/cdktf/cdktf-provider-aws-go/aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope,
	ClusterName: *string,
	PolicyArn: *string,
	PrincipalArn: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.accessScope">AccessScope</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | access_scope block. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.policyArn">PolicyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessScope`<sup>Required</sup> <a name="AccessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.accessScope"></a>

```go
AccessScope EksAccessPolicyAssociationAccessScope
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

access_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#access_scope EksAccessPolicyAssociation#access_scope}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}.

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.policyArn"></a>

```go
PolicyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}.

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.principalArn"></a>

```go
PrincipalArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.timeouts"></a>

```go
Timeouts EksAccessPolicyAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#timeouts EksAccessPolicyAssociation#timeouts}

---

### EksAccessPolicyAssociationTimeouts <a name="EksAccessPolicyAssociationTimeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

&eksaccesspolicyassociation.EksAccessPolicyAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#create EksAccessPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#delete EksAccessPolicyAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#create EksAccessPolicyAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/eks_access_policy_association#delete EksAccessPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksAccessPolicyAssociationAccessScopeOutputReference <a name="EksAccessPolicyAssociationAccessScopeOutputReference" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

eksaccesspolicyassociation.NewEksAccessPolicyAssociationAccessScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksAccessPolicyAssociationAccessScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resetNamespaces">ResetNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resetNamespaces"></a>

```go
func ResetNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() EksAccessPolicyAssociationAccessScope
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

---


### EksAccessPolicyAssociationTimeoutsOutputReference <a name="EksAccessPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksaccesspolicyassociation"

eksaccesspolicyassociation.NewEksAccessPolicyAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksAccessPolicyAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



