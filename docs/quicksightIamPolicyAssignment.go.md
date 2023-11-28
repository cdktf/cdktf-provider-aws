# `quicksightIamPolicyAssignment` Submodule <a name="`quicksightIamPolicyAssignment` Submodule" id="@cdktf/provider-aws.quicksightIamPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightIamPolicyAssignment <a name="QuicksightIamPolicyAssignment" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

quicksightiampolicyassignment.NewQuicksightIamPolicyAssignment(scope Construct, id *string, config QuicksightIamPolicyAssignmentConfig) QuicksightIamPolicyAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig">QuicksightIamPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig">QuicksightIamPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities">PutIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetPolicyArn">ResetPolicyArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutIdentities` <a name="PutIdentities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities"></a>

```go
func PutIdentities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPolicyArn` <a name="ResetPolicyArn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetPolicyArn"></a>

```go
func ResetPolicyArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightIamPolicyAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

quicksightiampolicyassignment.QuicksightIamPolicyAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

quicksightiampolicyassignment.QuicksightIamPolicyAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

quicksightiampolicyassignment.QuicksightIamPolicyAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

quicksightiampolicyassignment.QuicksightIamPolicyAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a QuicksightIamPolicyAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightIamPolicyAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightIamPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightIamPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentId">AssignmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identities">Identities</a></code> | <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList">QuicksightIamPolicyAssignmentIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentNameInput">AssignmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatusInput">AssignmentStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identitiesInput">IdentitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArnInput">PolicyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentName">AssignmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatus">AssignmentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignmentId`<sup>Required</sup> <a name="AssignmentId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentId"></a>

```go
func AssignmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identities"></a>

```go
func Identities() QuicksightIamPolicyAssignmentIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList">QuicksightIamPolicyAssignmentIdentitiesList</a>

---

##### `AssignmentNameInput`<sup>Optional</sup> <a name="AssignmentNameInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentNameInput"></a>

```go
func AssignmentNameInput() *string
```

- *Type:* *string

---

##### `AssignmentStatusInput`<sup>Optional</sup> <a name="AssignmentStatusInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatusInput"></a>

```go
func AssignmentStatusInput() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identitiesInput"></a>

```go
func IdentitiesInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArnInput"></a>

```go
func PolicyArnInput() *string
```

- *Type:* *string

---

##### `AssignmentName`<sup>Required</sup> <a name="AssignmentName" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentName"></a>

```go
func AssignmentName() *string
```

- *Type:* *string

---

##### `AssignmentStatus`<sup>Required</sup> <a name="AssignmentStatus" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatus"></a>

```go
func AssignmentStatus() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightIamPolicyAssignmentConfig <a name="QuicksightIamPolicyAssignmentConfig" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

&quicksightiampolicyassignment.QuicksightIamPolicyAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssignmentName: *string,
	AssignmentStatus: *string,
	AwsAccountId: *string,
	Identities: interface{},
	Namespace: *string,
	PolicyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentName">AssignmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentStatus">AssignmentStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.identities">Identities</a></code> | <code>interface{}</code> | identities block. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.policyArn">PolicyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignmentName`<sup>Required</sup> <a name="AssignmentName" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentName"></a>

```go
AssignmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}.

---

##### `AssignmentStatus`<sup>Required</sup> <a name="AssignmentStatus" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentStatus"></a>

```go
AssignmentStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}.

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.identities"></a>

```go
Identities interface{}
```

- *Type:* interface{}

identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#identities QuicksightIamPolicyAssignment#identities}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}.

---

##### `PolicyArn`<sup>Optional</sup> <a name="PolicyArn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.policyArn"></a>

```go
PolicyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}.

---

### QuicksightIamPolicyAssignmentIdentities <a name="QuicksightIamPolicyAssignmentIdentities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

&quicksightiampolicyassignment.QuicksightIamPolicyAssignmentIdentities {
	Group: *[]*string,
	User: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.group">Group</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#group QuicksightIamPolicyAssignment#group}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.user">User</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#user QuicksightIamPolicyAssignment#user}. |

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.group"></a>

```go
Group *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#group QuicksightIamPolicyAssignment#group}.

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.user"></a>

```go
User *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_iam_policy_assignment#user QuicksightIamPolicyAssignment#user}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightIamPolicyAssignmentIdentitiesList <a name="QuicksightIamPolicyAssignmentIdentitiesList" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

quicksightiampolicyassignment.NewQuicksightIamPolicyAssignmentIdentitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightIamPolicyAssignmentIdentitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get"></a>

```go
func Get(index *f64) QuicksightIamPolicyAssignmentIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightIamPolicyAssignmentIdentitiesOutputReference <a name="QuicksightIamPolicyAssignmentIdentitiesOutputReference" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightiampolicyassignment"

quicksightiampolicyassignment.NewQuicksightIamPolicyAssignmentIdentitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightIamPolicyAssignmentIdentitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.groupInput">GroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.userInput">UserInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.group">Group</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.user">User</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.groupInput"></a>

```go
func GroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.userInput"></a>

```go
func UserInput() *[]*string
```

- *Type:* *[]*string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.group"></a>

```go
func Group() *[]*string
```

- *Type:* *[]*string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.user"></a>

```go
func User() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



