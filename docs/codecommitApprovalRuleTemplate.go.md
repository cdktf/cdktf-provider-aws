# `codecommitApprovalRuleTemplate` Submodule <a name="`codecommitApprovalRuleTemplate` Submodule" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecommitApprovalRuleTemplate <a name="CodecommitApprovalRuleTemplate" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template aws_codecommit_approval_rule_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplate"

codecommitapprovalruletemplate.NewCodecommitApprovalRuleTemplate(scope Construct, id *string, config CodecommitApprovalRuleTemplateConfig) CodecommitApprovalRuleTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig">CodecommitApprovalRuleTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig">CodecommitApprovalRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CodecommitApprovalRuleTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplate"

codecommitapprovalruletemplate.CodecommitApprovalRuleTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplate"

codecommitapprovalruletemplate.CodecommitApprovalRuleTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplate"

codecommitapprovalruletemplate.CodecommitApprovalRuleTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplate"

codecommitapprovalruletemplate.CodecommitApprovalRuleTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CodecommitApprovalRuleTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodecommitApprovalRuleTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodecommitApprovalRuleTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CodecommitApprovalRuleTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.approvalRuleTemplateId">ApprovalRuleTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.lastModifiedDate">LastModifiedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.lastModifiedUser">LastModifiedUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.ruleContentSha256">RuleContentSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalRuleTemplateId`<sup>Required</sup> <a name="ApprovalRuleTemplateId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

```go
func ApprovalRuleTemplateId() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.lastModifiedDate"></a>

```go
func LastModifiedDate() *string
```

- *Type:* *string

---

##### `LastModifiedUser`<sup>Required</sup> <a name="LastModifiedUser" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.lastModifiedUser"></a>

```go
func LastModifiedUser() *string
```

- *Type:* *string

---

##### `RuleContentSha256`<sup>Required</sup> <a name="RuleContentSha256" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.ruleContentSha256"></a>

```go
func RuleContentSha256() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodecommitApprovalRuleTemplateConfig <a name="CodecommitApprovalRuleTemplateConfig" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codecommitapprovalruletemplate"

&codecommitapprovalruletemplate.CodecommitApprovalRuleTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Content: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#content CodecommitApprovalRuleTemplate#content}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#name CodecommitApprovalRuleTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#description CodecommitApprovalRuleTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#id CodecommitApprovalRuleTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#content CodecommitApprovalRuleTemplate#content}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#name CodecommitApprovalRuleTemplate#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#description CodecommitApprovalRuleTemplate#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#id CodecommitApprovalRuleTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.codecommitApprovalRuleTemplate.CodecommitApprovalRuleTemplateConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codecommit_approval_rule_template#region CodecommitApprovalRuleTemplate#region}

---



