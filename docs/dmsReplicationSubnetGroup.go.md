# `dmsReplicationSubnetGroup` Submodule <a name="`dmsReplicationSubnetGroup` Submodule" id="@cdktf/provider-aws.dmsReplicationSubnetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationSubnetGroup <a name="DmsReplicationSubnetGroup" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group aws_dms_replication_subnet_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationsubnetgroup"

dmsreplicationsubnetgroup.NewDmsReplicationSubnetGroup(scope Construct, id *string, config DmsReplicationSubnetGroupConfig) DmsReplicationSubnetGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig">DmsReplicationSubnetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig">DmsReplicationSubnetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsReplicationSubnetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationsubnetgroup"

dmsreplicationsubnetgroup.DmsReplicationSubnetGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationsubnetgroup"

dmsreplicationsubnetgroup.DmsReplicationSubnetGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationsubnetgroup"

dmsreplicationsubnetgroup.DmsReplicationSubnetGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationsubnetgroup"

dmsreplicationsubnetgroup.DmsReplicationSubnetGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DmsReplicationSubnetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DmsReplicationSubnetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DmsReplicationSubnetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DmsReplicationSubnetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupArn">ReplicationSubnetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescriptionInput">ReplicationSubnetGroupDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdInput">ReplicationSubnetGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescription">ReplicationSubnetGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReplicationSubnetGroupArn`<sup>Required</sup> <a name="ReplicationSubnetGroupArn" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupArn"></a>

```go
func ReplicationSubnetGroupArn() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ReplicationSubnetGroupDescriptionInput`<sup>Optional</sup> <a name="ReplicationSubnetGroupDescriptionInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescriptionInput"></a>

```go
func ReplicationSubnetGroupDescriptionInput() *string
```

- *Type:* *string

---

##### `ReplicationSubnetGroupIdInput`<sup>Optional</sup> <a name="ReplicationSubnetGroupIdInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdInput"></a>

```go
func ReplicationSubnetGroupIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplicationSubnetGroupDescription`<sup>Required</sup> <a name="ReplicationSubnetGroupDescription" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

```go
func ReplicationSubnetGroupDescription() *string
```

- *Type:* *string

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupId"></a>

```go
func ReplicationSubnetGroupId() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationSubnetGroupConfig <a name="DmsReplicationSubnetGroupConfig" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationsubnetgroup"

&dmsreplicationsubnetgroup.DmsReplicationSubnetGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ReplicationSubnetGroupDescription: *string,
	ReplicationSubnetGroupId: *string,
	SubnetIds: *[]*string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupDescription">ReplicationSubnetGroupDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_id DmsReplicationSubnetGroup#replication_subnet_group_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#subnet_ids DmsReplicationSubnetGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#id DmsReplicationSubnetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#tags DmsReplicationSubnetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#tags_all DmsReplicationSubnetGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReplicationSubnetGroupDescription`<sup>Required</sup> <a name="ReplicationSubnetGroupDescription" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupDescription"></a>

```go
ReplicationSubnetGroupDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}.

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupId"></a>

```go
ReplicationSubnetGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_id DmsReplicationSubnetGroup#replication_subnet_group_id}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#subnet_ids DmsReplicationSubnetGroup#subnet_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#id DmsReplicationSubnetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#tags DmsReplicationSubnetGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/dms_replication_subnet_group#tags_all DmsReplicationSubnetGroup#tags_all}.

---



