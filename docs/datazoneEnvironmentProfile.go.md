# `datazoneEnvironmentProfile` Submodule <a name="`datazoneEnvironmentProfile` Submodule" id="@cdktf/provider-aws.datazoneEnvironmentProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentProfile <a name="DatazoneEnvironmentProfile" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile aws_datazone_environment_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

datazoneenvironmentprofile.NewDatazoneEnvironmentProfile(scope Construct, id *string, config DatazoneEnvironmentProfileConfig) DatazoneEnvironmentProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig">DatazoneEnvironmentProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig">DatazoneEnvironmentProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters">PutUserParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetUserParameters">ResetUserParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUserParameters` <a name="PutUserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters"></a>

```go
func PutUserParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetUserParameters` <a name="ResetUserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetUserParameters"></a>

```go
func ResetUserParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneEnvironmentProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

datazoneenvironmentprofile.DatazoneEnvironmentProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

datazoneenvironmentprofile.DatazoneEnvironmentProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

datazoneenvironmentprofile.DatazoneEnvironmentProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

datazoneenvironmentprofile.DatazoneEnvironmentProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatazoneEnvironmentProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneEnvironmentProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneEnvironmentProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParameters">UserParameters</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList">DatazoneEnvironmentProfileUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegionInput">AwsAccountRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifierInput">EnvironmentBlueprintIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParametersInput">UserParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegion">AwsAccountRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifier">ProjectIdentifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UserParameters`<sup>Required</sup> <a name="UserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParameters"></a>

```go
func UserParameters() DatazoneEnvironmentProfileUserParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList">DatazoneEnvironmentProfileUserParametersList</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `AwsAccountRegionInput`<sup>Optional</sup> <a name="AwsAccountRegionInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegionInput"></a>

```go
func AwsAccountRegionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifierInput"></a>

```go
func DomainIdentifierInput() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintIdentifierInput`<sup>Optional</sup> <a name="EnvironmentBlueprintIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifierInput"></a>

```go
func EnvironmentBlueprintIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifierInput"></a>

```go
func ProjectIdentifierInput() *string
```

- *Type:* *string

---

##### `UserParametersInput`<sup>Optional</sup> <a name="UserParametersInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParametersInput"></a>

```go
func UserParametersInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AwsAccountRegion`<sup>Required</sup> <a name="AwsAccountRegion" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegion"></a>

```go
func AwsAccountRegion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifier"></a>

```go
func EnvironmentBlueprintIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifier"></a>

```go
func ProjectIdentifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentProfileConfig <a name="DatazoneEnvironmentProfileConfig" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

&datazoneenvironmentprofile.DatazoneEnvironmentProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AwsAccountRegion: *string,
	DomainIdentifier: *string,
	EnvironmentBlueprintIdentifier: *string,
	Name: *string,
	ProjectIdentifier: *string,
	AwsAccountId: *string,
	Description: *string,
	UserParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountRegion">AwsAccountRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.projectIdentifier">ProjectIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.userParameters">UserParameters</a></code> | <code>interface{}</code> | user_parameters block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountRegion`<sup>Required</sup> <a name="AwsAccountRegion" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountRegion"></a>

```go
AwsAccountRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}.

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.domainIdentifier"></a>

```go
DomainIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}.

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.environmentBlueprintIdentifier"></a>

```go
EnvironmentBlueprintIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}.

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.projectIdentifier"></a>

```go
ProjectIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}.

---

##### `UserParameters`<sup>Optional</sup> <a name="UserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.userParameters"></a>

```go
UserParameters interface{}
```

- *Type:* interface{}

user_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#user_parameters DatazoneEnvironmentProfile#user_parameters}

---

### DatazoneEnvironmentProfileUserParameters <a name="DatazoneEnvironmentProfileUserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

&datazoneenvironmentprofile.DatazoneEnvironmentProfileUserParameters {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#value DatazoneEnvironmentProfile#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/datazone_environment_profile#value DatazoneEnvironmentProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentProfileUserParametersList <a name="DatazoneEnvironmentProfileUserParametersList" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

datazoneenvironmentprofile.NewDatazoneEnvironmentProfileUserParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneEnvironmentProfileUserParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get"></a>

```go
func Get(index *f64) DatazoneEnvironmentProfileUserParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneEnvironmentProfileUserParametersOutputReference <a name="DatazoneEnvironmentProfileUserParametersOutputReference" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/datazoneenvironmentprofile"

datazoneenvironmentprofile.NewDatazoneEnvironmentProfileUserParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneEnvironmentProfileUserParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



