# `codecommitApprovalRuleTemplateAssociation` Submodule <a name="`codecommitApprovalRuleTemplateAssociation` Submodule" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecommitApprovalRuleTemplateAssociation <a name="CodecommitApprovalRuleTemplateAssociation" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association aws_codecommit_approval_rule_template_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplateassociation"

codecommitapprovalruletemplateassociation.NewCodecommitApprovalRuleTemplateAssociation(scope Construct, id *string, config CodecommitApprovalRuleTemplateAssociationConfig) CodecommitApprovalRuleTemplateAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig">CodecommitApprovalRuleTemplateAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig">CodecommitApprovalRuleTemplateAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CodecommitApprovalRuleTemplateAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplateassociation"

codecommitapprovalruletemplateassociation.CodecommitApprovalRuleTemplateAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplateassociation"

codecommitapprovalruletemplateassociation.CodecommitApprovalRuleTemplateAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplateassociation"

codecommitapprovalruletemplateassociation.CodecommitApprovalRuleTemplateAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplateassociation"

codecommitapprovalruletemplateassociation.CodecommitApprovalRuleTemplateAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CodecommitApprovalRuleTemplateAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodecommitApprovalRuleTemplateAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodecommitApprovalRuleTemplateAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CodecommitApprovalRuleTemplateAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateNameInput">ApprovalRuleTemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateName">ApprovalRuleTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalRuleTemplateNameInput`<sup>Optional</sup> <a name="ApprovalRuleTemplateNameInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateNameInput"></a>

```go
func ApprovalRuleTemplateNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `ApprovalRuleTemplateName`<sup>Required</sup> <a name="ApprovalRuleTemplateName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateName"></a>

```go
func ApprovalRuleTemplateName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodecommitApprovalRuleTemplateAssociationConfig <a name="CodecommitApprovalRuleTemplateAssociationConfig" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplateassociation"

&codecommitapprovalruletemplateassociation.CodecommitApprovalRuleTemplateAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApprovalRuleTemplateName: *string,
	RepositoryName: *string,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.approvalRuleTemplateName">ApprovalRuleTemplateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalRuleTemplateName`<sup>Required</sup> <a name="ApprovalRuleTemplateName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.approvalRuleTemplateName"></a>

```go
ApprovalRuleTemplateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}.

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codecommit_approval_rule_template_association#region CodecommitApprovalRuleTemplateAssociation#region}

---



