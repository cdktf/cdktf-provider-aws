# `lambdaRuntimeManagementConfig` Submodule <a name="`lambdaRuntimeManagementConfig` Submodule" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntimeManagementConfig <a name="LambdaRuntimeManagementConfig" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config aws_lambda_runtime_management_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdaruntimemanagementconfig"

lambdaruntimemanagementconfig.NewLambdaRuntimeManagementConfig(scope Construct, id *string, config LambdaRuntimeManagementConfigConfig) LambdaRuntimeManagementConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig">LambdaRuntimeManagementConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig">LambdaRuntimeManagementConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetQualifier">ResetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetRuntimeVersionArn">ResetRuntimeVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetUpdateRuntimeOn">ResetUpdateRuntimeOn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetQualifier"></a>

```go
func ResetQualifier()
```

##### `ResetRuntimeVersionArn` <a name="ResetRuntimeVersionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetRuntimeVersionArn"></a>

```go
func ResetRuntimeVersionArn()
```

##### `ResetUpdateRuntimeOn` <a name="ResetUpdateRuntimeOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.resetUpdateRuntimeOn"></a>

```go
func ResetUpdateRuntimeOn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LambdaRuntimeManagementConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdaruntimemanagementconfig"

lambdaruntimemanagementconfig.LambdaRuntimeManagementConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdaruntimemanagementconfig"

lambdaruntimemanagementconfig.LambdaRuntimeManagementConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdaruntimemanagementconfig"

lambdaruntimemanagementconfig.LambdaRuntimeManagementConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdaruntimemanagementconfig"

lambdaruntimemanagementconfig.LambdaRuntimeManagementConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LambdaRuntimeManagementConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaRuntimeManagementConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaRuntimeManagementConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LambdaRuntimeManagementConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.qualifierInput">QualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.runtimeVersionArnInput">RuntimeVersionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.updateRuntimeOnInput">UpdateRuntimeOnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.updateRuntimeOn">UpdateRuntimeOn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.qualifierInput"></a>

```go
func QualifierInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionArnInput`<sup>Optional</sup> <a name="RuntimeVersionArnInput" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.runtimeVersionArnInput"></a>

```go
func RuntimeVersionArnInput() *string
```

- *Type:* *string

---

##### `UpdateRuntimeOnInput`<sup>Optional</sup> <a name="UpdateRuntimeOnInput" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.updateRuntimeOnInput"></a>

```go
func UpdateRuntimeOnInput() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `RuntimeVersionArn`<sup>Required</sup> <a name="RuntimeVersionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.runtimeVersionArn"></a>

```go
func RuntimeVersionArn() *string
```

- *Type:* *string

---

##### `UpdateRuntimeOn`<sup>Required</sup> <a name="UpdateRuntimeOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.updateRuntimeOn"></a>

```go
func UpdateRuntimeOn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeManagementConfigConfig <a name="LambdaRuntimeManagementConfigConfig" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdaruntimemanagementconfig"

&lambdaruntimemanagementconfig.LambdaRuntimeManagementConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionName: *string,
	Qualifier: *string,
	RuntimeVersionArn: *string,
	UpdateRuntimeOn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#function_name LambdaRuntimeManagementConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.qualifier">Qualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#qualifier LambdaRuntimeManagementConfig#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#runtime_version_arn LambdaRuntimeManagementConfig#runtime_version_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.updateRuntimeOn">UpdateRuntimeOn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#update_runtime_on LambdaRuntimeManagementConfig#update_runtime_on}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#function_name LambdaRuntimeManagementConfig#function_name}.

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.qualifier"></a>

```go
Qualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#qualifier LambdaRuntimeManagementConfig#qualifier}.

---

##### `RuntimeVersionArn`<sup>Optional</sup> <a name="RuntimeVersionArn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.runtimeVersionArn"></a>

```go
RuntimeVersionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#runtime_version_arn LambdaRuntimeManagementConfig#runtime_version_arn}.

---

##### `UpdateRuntimeOn`<sup>Optional</sup> <a name="UpdateRuntimeOn" id="@cdktf/provider-aws.lambdaRuntimeManagementConfig.LambdaRuntimeManagementConfigConfig.property.updateRuntimeOn"></a>

```go
UpdateRuntimeOn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/lambda_runtime_management_config#update_runtime_on LambdaRuntimeManagementConfig#update_runtime_on}.

---



