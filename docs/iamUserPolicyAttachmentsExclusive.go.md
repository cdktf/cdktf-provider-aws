# `iamUserPolicyAttachmentsExclusive` Submodule <a name="`iamUserPolicyAttachmentsExclusive` Submodule" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserPolicyAttachmentsExclusive <a name="IamUserPolicyAttachmentsExclusive" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/iam_user_policy_attachments_exclusive aws_iam_user_policy_attachments_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/iamuserpolicyattachmentsexclusive"

iamuserpolicyattachmentsexclusive.NewIamUserPolicyAttachmentsExclusive(scope Construct, id *string, config IamUserPolicyAttachmentsExclusiveConfig) IamUserPolicyAttachmentsExclusive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig">IamUserPolicyAttachmentsExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig">IamUserPolicyAttachmentsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamUserPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/iamuserpolicyattachmentsexclusive"

iamuserpolicyattachmentsexclusive.IamUserPolicyAttachmentsExclusive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/iamuserpolicyattachmentsexclusive"

iamuserpolicyattachmentsexclusive.IamUserPolicyAttachmentsExclusive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/iamuserpolicyattachmentsexclusive"

iamuserpolicyattachmentsexclusive.IamUserPolicyAttachmentsExclusive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/iamuserpolicyattachmentsexclusive"

iamuserpolicyattachmentsexclusive.IamUserPolicyAttachmentsExclusive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IamUserPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamUserPolicyAttachmentsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamUserPolicyAttachmentsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/iam_user_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IamUserPolicyAttachmentsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.policyArnsInput">PolicyArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.policyArns">PolicyArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyArnsInput`<sup>Optional</sup> <a name="PolicyArnsInput" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.policyArnsInput"></a>

```go
func PolicyArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `PolicyArns`<sup>Required</sup> <a name="PolicyArns" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.policyArns"></a>

```go
func PolicyArns() *[]*string
```

- *Type:* *[]*string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserPolicyAttachmentsExclusiveConfig <a name="IamUserPolicyAttachmentsExclusiveConfig" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/iamuserpolicyattachmentsexclusive"

&iamuserpolicyattachmentsexclusive.IamUserPolicyAttachmentsExclusiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyArns: *[]*string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.policyArns">PolicyArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/iam_user_policy_attachments_exclusive#policy_arns IamUserPolicyAttachmentsExclusive#policy_arns}. |
| <code><a href="#@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/iam_user_policy_attachments_exclusive#user_name IamUserPolicyAttachmentsExclusive#user_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyArns`<sup>Required</sup> <a name="PolicyArns" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.policyArns"></a>

```go
PolicyArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/iam_user_policy_attachments_exclusive#policy_arns IamUserPolicyAttachmentsExclusive#policy_arns}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.iamUserPolicyAttachmentsExclusive.IamUserPolicyAttachmentsExclusiveConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/iam_user_policy_attachments_exclusive#user_name IamUserPolicyAttachmentsExclusive#user_name}.

---



