# `securityhubStandardsControlAssociation` Submodule <a name="`securityhubStandardsControlAssociation` Submodule" id="@cdktf/provider-aws.securityhubStandardsControlAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubStandardsControlAssociation <a name="SecurityhubStandardsControlAssociation" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association aws_securityhub_standards_control_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubstandardscontrolassociation"

securityhubstandardscontrolassociation.NewSecurityhubStandardsControlAssociation(scope Construct, id *string, config SecurityhubStandardsControlAssociationConfig) SecurityhubStandardsControlAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig">SecurityhubStandardsControlAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig">SecurityhubStandardsControlAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.resetUpdatedReason">ResetUpdatedReason</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetUpdatedReason` <a name="ResetUpdatedReason" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.resetUpdatedReason"></a>

```go
func ResetUpdatedReason()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityhubStandardsControlAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubstandardscontrolassociation"

securityhubstandardscontrolassociation.SecurityhubStandardsControlAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubstandardscontrolassociation"

securityhubstandardscontrolassociation.SecurityhubStandardsControlAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubstandardscontrolassociation"

securityhubstandardscontrolassociation.SecurityhubStandardsControlAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubstandardscontrolassociation"

securityhubstandardscontrolassociation.SecurityhubStandardsControlAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityhubStandardsControlAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityhubStandardsControlAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityhubStandardsControlAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityhubStandardsControlAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.associationStatusInput">AssociationStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.securityControlIdInput">SecurityControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.standardsArnInput">StandardsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.updatedReasonInput">UpdatedReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.associationStatus">AssociationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.standardsArn">StandardsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.updatedReason">UpdatedReason</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AssociationStatusInput`<sup>Optional</sup> <a name="AssociationStatusInput" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.associationStatusInput"></a>

```go
func AssociationStatusInput() *string
```

- *Type:* *string

---

##### `SecurityControlIdInput`<sup>Optional</sup> <a name="SecurityControlIdInput" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.securityControlIdInput"></a>

```go
func SecurityControlIdInput() *string
```

- *Type:* *string

---

##### `StandardsArnInput`<sup>Optional</sup> <a name="StandardsArnInput" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.standardsArnInput"></a>

```go
func StandardsArnInput() *string
```

- *Type:* *string

---

##### `UpdatedReasonInput`<sup>Optional</sup> <a name="UpdatedReasonInput" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.updatedReasonInput"></a>

```go
func UpdatedReasonInput() *string
```

- *Type:* *string

---

##### `AssociationStatus`<sup>Required</sup> <a name="AssociationStatus" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.associationStatus"></a>

```go
func AssociationStatus() *string
```

- *Type:* *string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.securityControlId"></a>

```go
func SecurityControlId() *string
```

- *Type:* *string

---

##### `StandardsArn`<sup>Required</sup> <a name="StandardsArn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.standardsArn"></a>

```go
func StandardsArn() *string
```

- *Type:* *string

---

##### `UpdatedReason`<sup>Required</sup> <a name="UpdatedReason" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.updatedReason"></a>

```go
func UpdatedReason() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubStandardsControlAssociationConfig <a name="SecurityhubStandardsControlAssociationConfig" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubstandardscontrolassociation"

&securityhubstandardscontrolassociation.SecurityhubStandardsControlAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssociationStatus: *string,
	SecurityControlId: *string,
	StandardsArn: *string,
	UpdatedReason: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.associationStatus">AssociationStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#association_status SecurityhubStandardsControlAssociation#association_status}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#security_control_id SecurityhubStandardsControlAssociation#security_control_id}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.standardsArn">StandardsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#standards_arn SecurityhubStandardsControlAssociation#standards_arn}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.updatedReason">UpdatedReason</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#updated_reason SecurityhubStandardsControlAssociation#updated_reason}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociationStatus`<sup>Required</sup> <a name="AssociationStatus" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.associationStatus"></a>

```go
AssociationStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#association_status SecurityhubStandardsControlAssociation#association_status}.

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.securityControlId"></a>

```go
SecurityControlId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#security_control_id SecurityhubStandardsControlAssociation#security_control_id}.

---

##### `StandardsArn`<sup>Required</sup> <a name="StandardsArn" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.standardsArn"></a>

```go
StandardsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#standards_arn SecurityhubStandardsControlAssociation#standards_arn}.

---

##### `UpdatedReason`<sup>Optional</sup> <a name="UpdatedReason" id="@cdktf/provider-aws.securityhubStandardsControlAssociation.SecurityhubStandardsControlAssociationConfig.property.updatedReason"></a>

```go
UpdatedReason *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/securityhub_standards_control_association#updated_reason SecurityhubStandardsControlAssociation#updated_reason}.

---



