# `eksPodIdentityAssociation` Submodule <a name="`eksPodIdentityAssociation` Submodule" id="@cdktf/provider-aws.eksPodIdentityAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksPodIdentityAssociation <a name="EksPodIdentityAssociation" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association aws_eks_pod_identity_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ekspodidentityassociation"

ekspodidentityassociation.NewEksPodIdentityAssociation(scope Construct, id *string, config EksPodIdentityAssociationConfig) EksPodIdentityAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig">EksPodIdentityAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig">EksPodIdentityAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetDisableSessionTags">ResetDisableSessionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTargetRoleArn">ResetTargetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisableSessionTags` <a name="ResetDisableSessionTags" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetDisableSessionTags"></a>

```go
func ResetDisableSessionTags()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetRoleArn` <a name="ResetTargetRoleArn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTargetRoleArn"></a>

```go
func ResetTargetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EksPodIdentityAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ekspodidentityassociation"

ekspodidentityassociation.EksPodIdentityAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ekspodidentityassociation"

ekspodidentityassociation.EksPodIdentityAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ekspodidentityassociation"

ekspodidentityassociation.EksPodIdentityAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ekspodidentityassociation"

ekspodidentityassociation.EksPodIdentityAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EksPodIdentityAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EksPodIdentityAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EksPodIdentityAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EksPodIdentityAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationArn">AssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTagsInput">DisableSessionTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArnInput">TargetRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTags">DisableSessionTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociationArn`<sup>Required</sup> <a name="AssociationArn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationArn"></a>

```go
func AssociationArn() *string
```

- *Type:* *string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DisableSessionTagsInput`<sup>Optional</sup> <a name="DisableSessionTagsInput" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTagsInput"></a>

```go
func DisableSessionTagsInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetRoleArnInput`<sup>Optional</sup> <a name="TargetRoleArnInput" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArnInput"></a>

```go
func TargetRoleArnInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DisableSessionTags`<sup>Required</sup> <a name="DisableSessionTags" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTags"></a>

```go
func DisableSessionTags() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArn"></a>

```go
func TargetRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EksPodIdentityAssociationConfig <a name="EksPodIdentityAssociationConfig" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ekspodidentityassociation"

&ekspodidentityassociation.EksPodIdentityAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	Namespace: *string,
	RoleArn: *string,
	ServiceAccount: *string,
	DisableSessionTags: interface{},
	Region: *string,
	Tags: *map[string]*string,
	TargetRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#cluster_name EksPodIdentityAssociation#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#namespace EksPodIdentityAssociation#namespace}. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#role_arn EksPodIdentityAssociation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#service_account EksPodIdentityAssociation#service_account}. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.disableSessionTags">DisableSessionTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#disable_session_tags EksPodIdentityAssociation#disable_session_tags}. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#tags EksPodIdentityAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#target_role_arn EksPodIdentityAssociation#target_role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#cluster_name EksPodIdentityAssociation#cluster_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#namespace EksPodIdentityAssociation#namespace}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#role_arn EksPodIdentityAssociation#role_arn}.

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#service_account EksPodIdentityAssociation#service_account}.

---

##### `DisableSessionTags`<sup>Optional</sup> <a name="DisableSessionTags" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.disableSessionTags"></a>

```go
DisableSessionTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#disable_session_tags EksPodIdentityAssociation#disable_session_tags}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#region EksPodIdentityAssociation#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#tags EksPodIdentityAssociation#tags}.

---

##### `TargetRoleArn`<sup>Optional</sup> <a name="TargetRoleArn" id="@cdktf/provider-aws.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.targetRoleArn"></a>

```go
TargetRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_pod_identity_association#target_role_arn EksPodIdentityAssociation#target_role_arn}.

---



