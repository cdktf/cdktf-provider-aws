# `opensearchPackage` Submodule <a name="`opensearchPackage` Submodule" id="@cdktf/provider-aws.opensearchPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchPackage <a name="OpensearchPackage" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package aws_opensearch_package}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchpackage"

opensearchpackage.NewOpensearchPackage(scope Construct, id *string, config OpensearchPackageConfig) OpensearchPackage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig">OpensearchPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig">OpensearchPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource">PutPackageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetPackageDescription">ResetPackageDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPackageSource` <a name="PutPackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource"></a>

```go
func PutPackageSource(value OpensearchPackagePackageSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetId"></a>

```go
func ResetId()
```

##### `ResetPackageDescription` <a name="ResetPackageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetPackageDescription"></a>

```go
func ResetPackageDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchPackage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchpackage"

opensearchpackage.OpensearchPackage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchpackage"

opensearchpackage.OpensearchPackage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchpackage"

opensearchpackage.OpensearchPackage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchpackage"

opensearchpackage.OpensearchPackage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpensearchPackage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.availablePackageVersion">AvailablePackageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageId">PackageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSource">PackageSource</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference">OpensearchPackagePackageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescriptionInput">PackageDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageNameInput">PackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSourceInput">PackageSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageTypeInput">PackageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescription">PackageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageName">PackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailablePackageVersion`<sup>Required</sup> <a name="AvailablePackageVersion" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.availablePackageVersion"></a>

```go
func AvailablePackageVersion() *string
```

- *Type:* *string

---

##### `PackageId`<sup>Required</sup> <a name="PackageId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageId"></a>

```go
func PackageId() *string
```

- *Type:* *string

---

##### `PackageSource`<sup>Required</sup> <a name="PackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSource"></a>

```go
func PackageSource() OpensearchPackagePackageSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference">OpensearchPackagePackageSourceOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PackageDescriptionInput`<sup>Optional</sup> <a name="PackageDescriptionInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescriptionInput"></a>

```go
func PackageDescriptionInput() *string
```

- *Type:* *string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageNameInput"></a>

```go
func PackageNameInput() *string
```

- *Type:* *string

---

##### `PackageSourceInput`<sup>Optional</sup> <a name="PackageSourceInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSourceInput"></a>

```go
func PackageSourceInput() OpensearchPackagePackageSource
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---

##### `PackageTypeInput`<sup>Optional</sup> <a name="PackageTypeInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageTypeInput"></a>

```go
func PackageTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PackageDescription`<sup>Required</sup> <a name="PackageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescription"></a>

```go
func PackageDescription() *string
```

- *Type:* *string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageName"></a>

```go
func PackageName() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchPackageConfig <a name="OpensearchPackageConfig" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchpackage"

&opensearchpackage.OpensearchPackageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PackageName: *string,
	PackageSource: github.com/cdktf/cdktf-provider-aws-go/aws.opensearchPackage.OpensearchPackagePackageSource,
	PackageType: *string,
	Id: *string,
	PackageDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageName">PackageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageSource">PackageSource</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | package_source block. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageType">PackageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#id OpensearchPackage#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageDescription">PackageDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageName"></a>

```go
PackageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}.

---

##### `PackageSource`<sup>Required</sup> <a name="PackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageSource"></a>

```go
PackageSource OpensearchPackagePackageSource
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

package_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#package_source OpensearchPackage#package_source}

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageType"></a>

```go
PackageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#id OpensearchPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageDescription`<sup>Optional</sup> <a name="PackageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageDescription"></a>

```go
PackageDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}.

---

### OpensearchPackagePackageSource <a name="OpensearchPackagePackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchpackage"

&opensearchpackage.OpensearchPackagePackageSource {
	S3BucketName: *string,
	S3Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#s3_bucket_name OpensearchPackage#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3Key">S3Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#s3_key OpensearchPackage#s3_key}. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#s3_bucket_name OpensearchPackage#s3_bucket_name}.

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/opensearch_package#s3_key OpensearchPackage#s3_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchPackagePackageSourceOutputReference <a name="OpensearchPackagePackageSourceOutputReference" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opensearchpackage"

opensearchpackage.NewOpensearchPackagePackageSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchPackagePackageSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchPackagePackageSource
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---



