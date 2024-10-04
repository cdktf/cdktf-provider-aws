# `securitylakeAwsLogSource` Submodule <a name="`securitylakeAwsLogSource` Submodule" id="@cdktf/provider-aws.securitylakeAwsLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeAwsLogSource <a name="SecuritylakeAwsLogSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source aws_securitylake_aws_log_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

securitylakeawslogsource.NewSecuritylakeAwsLogSource(scope Construct, id *string, config SecuritylakeAwsLogSourceConfig) SecuritylakeAwsLogSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig">SecuritylakeAwsLogSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig">SecuritylakeAwsLogSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetSource"></a>

```go
func ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeAwsLogSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

securitylakeawslogsource.SecuritylakeAwsLogSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

securitylakeawslogsource.SecuritylakeAwsLogSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

securitylakeawslogsource.SecuritylakeAwsLogSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

securitylakeawslogsource.SecuritylakeAwsLogSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecuritylakeAwsLogSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecuritylakeAwsLogSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecuritylakeAwsLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeAwsLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList">SecuritylakeAwsLogSourceSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.source"></a>

```go
func Source() SecuritylakeAwsLogSourceSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList">SecuritylakeAwsLogSourceSourceList</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeAwsLogSourceConfig <a name="SecuritylakeAwsLogSourceConfig" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

&securitylakeawslogsource.SecuritylakeAwsLogSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Source: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.source">Source</a></code> | <code>interface{}</code> | source block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#source SecuritylakeAwsLogSource#source}

---

### SecuritylakeAwsLogSourceSource <a name="SecuritylakeAwsLogSourceSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

&securitylakeawslogsource.SecuritylakeAwsLogSourceSource {
	Regions: *[]*string,
	SourceName: *string,
	Accounts: *[]*string,
	SourceVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#regions SecuritylakeAwsLogSource#regions}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.accounts">Accounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}. |

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#regions SecuritylakeAwsLogSource#regions}.

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}.

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.accounts"></a>

```go
Accounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}.

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceVersion"></a>

```go
SourceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeAwsLogSourceSourceList <a name="SecuritylakeAwsLogSourceSourceList" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

securitylakeawslogsource.NewSecuritylakeAwsLogSourceSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeAwsLogSourceSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get"></a>

```go
func Get(index *f64) SecuritylakeAwsLogSourceSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeAwsLogSourceSourceOutputReference <a name="SecuritylakeAwsLogSourceSourceOutputReference" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakeawslogsource"

securitylakeawslogsource.NewSecuritylakeAwsLogSourceSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeAwsLogSourceSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetSourceVersion">ResetSourceVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetAccounts"></a>

```go
func ResetAccounts()
```

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetSourceVersion"></a>

```go
func ResetSourceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accountsInput">AccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersionInput">SourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accounts">Accounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accountsInput"></a>

```go
func AccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersionInput"></a>

```go
func SourceVersionInput() *string
```

- *Type:* *string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accounts"></a>

```go
func Accounts() *[]*string
```

- *Type:* *[]*string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersion"></a>

```go
func SourceVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



