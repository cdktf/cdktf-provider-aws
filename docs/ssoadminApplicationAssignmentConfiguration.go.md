# `ssoadminApplicationAssignmentConfiguration` Submodule <a name="`ssoadminApplicationAssignmentConfiguration` Submodule" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminApplicationAssignmentConfiguration <a name="SsoadminApplicationAssignmentConfiguration" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/ssoadmin_application_assignment_configuration aws_ssoadmin_application_assignment_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ssoadminapplicationassignmentconfiguration"

ssoadminapplicationassignmentconfiguration.NewSsoadminApplicationAssignmentConfiguration(scope Construct, id *string, config SsoadminApplicationAssignmentConfigurationConfig) SsoadminApplicationAssignmentConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig">SsoadminApplicationAssignmentConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig">SsoadminApplicationAssignmentConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminApplicationAssignmentConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ssoadminapplicationassignmentconfiguration"

ssoadminapplicationassignmentconfiguration.SsoadminApplicationAssignmentConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ssoadminapplicationassignmentconfiguration"

ssoadminapplicationassignmentconfiguration.SsoadminApplicationAssignmentConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ssoadminapplicationassignmentconfiguration"

ssoadminapplicationassignmentconfiguration.SsoadminApplicationAssignmentConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ssoadminapplicationassignmentconfiguration"

ssoadminapplicationassignmentconfiguration.SsoadminApplicationAssignmentConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SsoadminApplicationAssignmentConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsoadminApplicationAssignmentConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsoadminApplicationAssignmentConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/ssoadmin_application_assignment_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminApplicationAssignmentConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.applicationArnInput">ApplicationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.assignmentRequiredInput">AssignmentRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.assignmentRequired">AssignmentRequired</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.applicationArnInput"></a>

```go
func ApplicationArnInput() *string
```

- *Type:* *string

---

##### `AssignmentRequiredInput`<sup>Optional</sup> <a name="AssignmentRequiredInput" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.assignmentRequiredInput"></a>

```go
func AssignmentRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `AssignmentRequired`<sup>Required</sup> <a name="AssignmentRequired" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.assignmentRequired"></a>

```go
func AssignmentRequired() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminApplicationAssignmentConfigurationConfig <a name="SsoadminApplicationAssignmentConfigurationConfig" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ssoadminapplicationassignmentconfiguration"

&ssoadminapplicationassignmentconfiguration.SsoadminApplicationAssignmentConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationArn: *string,
	AssignmentRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/ssoadmin_application_assignment_configuration#application_arn SsoadminApplicationAssignmentConfiguration#application_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.assignmentRequired">AssignmentRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/ssoadmin_application_assignment_configuration#assignment_required SsoadminApplicationAssignmentConfiguration#assignment_required}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.applicationArn"></a>

```go
ApplicationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/ssoadmin_application_assignment_configuration#application_arn SsoadminApplicationAssignmentConfiguration#application_arn}.

---

##### `AssignmentRequired`<sup>Required</sup> <a name="AssignmentRequired" id="@cdktf/provider-aws.ssoadminApplicationAssignmentConfiguration.SsoadminApplicationAssignmentConfigurationConfig.property.assignmentRequired"></a>

```go
AssignmentRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/ssoadmin_application_assignment_configuration#assignment_required SsoadminApplicationAssignmentConfiguration#assignment_required}.

---



