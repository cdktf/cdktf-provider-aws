# `directoryServiceTrust` Submodule <a name="`directoryServiceTrust` Submodule" id="@cdktf/provider-aws.directoryServiceTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceTrust <a name="DirectoryServiceTrust" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust aws_directory_service_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/directoryservicetrust"

directoryservicetrust.NewDirectoryServiceTrust(scope Construct, id *string, config DirectoryServiceTrustConfig) DirectoryServiceTrust
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig">DirectoryServiceTrustConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig">DirectoryServiceTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetConditionalForwarderIpAddrs">ResetConditionalForwarderIpAddrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetDeleteAssociatedConditionalForwarder">ResetDeleteAssociatedConditionalForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetSelectiveAuth">ResetSelectiveAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetTrustType">ResetTrustType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetConditionalForwarderIpAddrs` <a name="ResetConditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetConditionalForwarderIpAddrs"></a>

```go
func ResetConditionalForwarderIpAddrs()
```

##### `ResetDeleteAssociatedConditionalForwarder` <a name="ResetDeleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetDeleteAssociatedConditionalForwarder"></a>

```go
func ResetDeleteAssociatedConditionalForwarder()
```

##### `ResetSelectiveAuth` <a name="ResetSelectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetSelectiveAuth"></a>

```go
func ResetSelectiveAuth()
```

##### `ResetTrustType` <a name="ResetTrustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetTrustType"></a>

```go
func ResetTrustType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DirectoryServiceTrust resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/directoryservicetrust"

directoryservicetrust.DirectoryServiceTrust_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/directoryservicetrust"

directoryservicetrust.DirectoryServiceTrust_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/directoryservicetrust"

directoryservicetrust.DirectoryServiceTrust_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/directoryservicetrust"

directoryservicetrust.DirectoryServiceTrust_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DirectoryServiceTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectoryServiceTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectoryServiceTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DirectoryServiceTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.createdDateTime">CreatedDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lastUpdatedDateTime">LastUpdatedDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.stateLastUpdatedDateTime">StateLastUpdatedDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustState">TrustState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustStateReason">TrustStateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrsInput">ConditionalForwarderIpAddrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarderInput">DeleteAssociatedConditionalForwarderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainNameInput">RemoteDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuthInput">SelectiveAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirectionInput">TrustDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPasswordInput">TrustPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustTypeInput">TrustTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrs">ConditionalForwarderIpAddrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarder">DeleteAssociatedConditionalForwarder</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainName">RemoteDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuth">SelectiveAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirection">TrustDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPassword">TrustPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustType">TrustType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedDateTime`<sup>Required</sup> <a name="CreatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.createdDateTime"></a>

```go
func CreatedDateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedDateTime`<sup>Required</sup> <a name="LastUpdatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lastUpdatedDateTime"></a>

```go
func LastUpdatedDateTime() *string
```

- *Type:* *string

---

##### `StateLastUpdatedDateTime`<sup>Required</sup> <a name="StateLastUpdatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.stateLastUpdatedDateTime"></a>

```go
func StateLastUpdatedDateTime() *string
```

- *Type:* *string

---

##### `TrustState`<sup>Required</sup> <a name="TrustState" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustState"></a>

```go
func TrustState() *string
```

- *Type:* *string

---

##### `TrustStateReason`<sup>Required</sup> <a name="TrustStateReason" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustStateReason"></a>

```go
func TrustStateReason() *string
```

- *Type:* *string

---

##### `ConditionalForwarderIpAddrsInput`<sup>Optional</sup> <a name="ConditionalForwarderIpAddrsInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrsInput"></a>

```go
func ConditionalForwarderIpAddrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeleteAssociatedConditionalForwarderInput`<sup>Optional</sup> <a name="DeleteAssociatedConditionalForwarderInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarderInput"></a>

```go
func DeleteAssociatedConditionalForwarderInput() interface{}
```

- *Type:* interface{}

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `RemoteDomainNameInput`<sup>Optional</sup> <a name="RemoteDomainNameInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainNameInput"></a>

```go
func RemoteDomainNameInput() *string
```

- *Type:* *string

---

##### `SelectiveAuthInput`<sup>Optional</sup> <a name="SelectiveAuthInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuthInput"></a>

```go
func SelectiveAuthInput() *string
```

- *Type:* *string

---

##### `TrustDirectionInput`<sup>Optional</sup> <a name="TrustDirectionInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirectionInput"></a>

```go
func TrustDirectionInput() *string
```

- *Type:* *string

---

##### `TrustPasswordInput`<sup>Optional</sup> <a name="TrustPasswordInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPasswordInput"></a>

```go
func TrustPasswordInput() *string
```

- *Type:* *string

---

##### `TrustTypeInput`<sup>Optional</sup> <a name="TrustTypeInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustTypeInput"></a>

```go
func TrustTypeInput() *string
```

- *Type:* *string

---

##### `ConditionalForwarderIpAddrs`<sup>Required</sup> <a name="ConditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrs"></a>

```go
func ConditionalForwarderIpAddrs() *[]*string
```

- *Type:* *[]*string

---

##### `DeleteAssociatedConditionalForwarder`<sup>Required</sup> <a name="DeleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarder"></a>

```go
func DeleteAssociatedConditionalForwarder() interface{}
```

- *Type:* interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `RemoteDomainName`<sup>Required</sup> <a name="RemoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainName"></a>

```go
func RemoteDomainName() *string
```

- *Type:* *string

---

##### `SelectiveAuth`<sup>Required</sup> <a name="SelectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuth"></a>

```go
func SelectiveAuth() *string
```

- *Type:* *string

---

##### `TrustDirection`<sup>Required</sup> <a name="TrustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirection"></a>

```go
func TrustDirection() *string
```

- *Type:* *string

---

##### `TrustPassword`<sup>Required</sup> <a name="TrustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPassword"></a>

```go
func TrustPassword() *string
```

- *Type:* *string

---

##### `TrustType`<sup>Required</sup> <a name="TrustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustType"></a>

```go
func TrustType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceTrustConfig <a name="DirectoryServiceTrustConfig" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/directoryservicetrust"

&directoryservicetrust.DirectoryServiceTrustConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DirectoryId: *string,
	RemoteDomainName: *string,
	TrustDirection: *string,
	TrustPassword: *string,
	ConditionalForwarderIpAddrs: *[]*string,
	DeleteAssociatedConditionalForwarder: interface{},
	SelectiveAuth: *string,
	TrustType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.remoteDomainName">RemoteDomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustDirection">TrustDirection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustPassword">TrustPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.conditionalForwarderIpAddrs">ConditionalForwarderIpAddrs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.deleteAssociatedConditionalForwarder">DeleteAssociatedConditionalForwarder</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.selectiveAuth">SelectiveAuth</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustType">TrustType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}.

---

##### `RemoteDomainName`<sup>Required</sup> <a name="RemoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.remoteDomainName"></a>

```go
RemoteDomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}.

---

##### `TrustDirection`<sup>Required</sup> <a name="TrustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustDirection"></a>

```go
TrustDirection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}.

---

##### `TrustPassword`<sup>Required</sup> <a name="TrustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustPassword"></a>

```go
TrustPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}.

---

##### `ConditionalForwarderIpAddrs`<sup>Optional</sup> <a name="ConditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.conditionalForwarderIpAddrs"></a>

```go
ConditionalForwarderIpAddrs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}.

---

##### `DeleteAssociatedConditionalForwarder`<sup>Optional</sup> <a name="DeleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.deleteAssociatedConditionalForwarder"></a>

```go
DeleteAssociatedConditionalForwarder interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}.

---

##### `SelectiveAuth`<sup>Optional</sup> <a name="SelectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.selectiveAuth"></a>

```go
SelectiveAuth *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}.

---

##### `TrustType`<sup>Optional</sup> <a name="TrustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustType"></a>

```go
TrustType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}.

---



