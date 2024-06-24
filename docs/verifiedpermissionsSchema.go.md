# `verifiedpermissionsSchema` Submodule <a name="`verifiedpermissionsSchema` Submodule" id="@cdktf/provider-aws.verifiedpermissionsSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsSchema <a name="VerifiedpermissionsSchema" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/verifiedpermissions_schema aws_verifiedpermissions_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedpermissionsschema"

verifiedpermissionsschema.NewVerifiedpermissionsSchema(scope Construct, id *string, config VerifiedpermissionsSchemaConfig) VerifiedpermissionsSchema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig">VerifiedpermissionsSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig">VerifiedpermissionsSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition">PutDefinition</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefinition` <a name="PutDefinition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition"></a>

```go
func PutDefinition(value VerifiedpermissionsSchemaDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedpermissionsSchema resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedpermissionsschema"

verifiedpermissionsschema.VerifiedpermissionsSchema_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedpermissionsschema"

verifiedpermissionsschema.VerifiedpermissionsSchema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedpermissionsschema"

verifiedpermissionsschema.VerifiedpermissionsSchema_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedpermissionsschema"

verifiedpermissionsschema.VerifiedpermissionsSchema_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VerifiedpermissionsSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VerifiedpermissionsSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VerifiedpermissionsSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/verifiedpermissions_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference">VerifiedpermissionsSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definitionInput">DefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreIdInput">PolicyStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreId">PolicyStoreId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definition"></a>

```go
func Definition() VerifiedpermissionsSchemaDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference">VerifiedpermissionsSchemaDefinitionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definitionInput"></a>

```go
func DefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyStoreIdInput`<sup>Optional</sup> <a name="PolicyStoreIdInput" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreIdInput"></a>

```go
func PolicyStoreIdInput() *string
```

- *Type:* *string

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreId"></a>

```go
func PolicyStoreId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsSchemaConfig <a name="VerifiedpermissionsSchemaConfig" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedpermissionsschema"

&verifiedpermissionsschema.VerifiedpermissionsSchemaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Definition: github.com/cdktf/cdktf-provider-aws-go/aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition,
	PolicyStoreId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a></code> | definition block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.policyStoreId">PolicyStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.definition"></a>

```go
Definition VerifiedpermissionsSchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/verifiedpermissions_schema#definition VerifiedpermissionsSchema#definition}

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.policyStoreId"></a>

```go
PolicyStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}.

---

### VerifiedpermissionsSchemaDefinition <a name="VerifiedpermissionsSchemaDefinition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedpermissionsschema"

&verifiedpermissionsschema.VerifiedpermissionsSchemaDefinition {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/verifiedpermissions_schema#value VerifiedpermissionsSchema#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/verifiedpermissions_schema#value VerifiedpermissionsSchema#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsSchemaDefinitionOutputReference <a name="VerifiedpermissionsSchemaDefinitionOutputReference" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/verifiedpermissionsschema"

verifiedpermissionsschema.NewVerifiedpermissionsSchemaDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsSchemaDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



