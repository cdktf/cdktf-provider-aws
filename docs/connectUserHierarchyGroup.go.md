# `connectUserHierarchyGroup` Submodule <a name="`connectUserHierarchyGroup` Submodule" id="@cdktf/provider-aws.connectUserHierarchyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyGroup <a name="ConnectUserHierarchyGroup" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group aws_connect_user_hierarchy_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroup(scope Construct, id *string, config ConnectUserHierarchyGroupConfig) ConnectUserHierarchyGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig">ConnectUserHierarchyGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig">ConnectUserHierarchyGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetParentGroupId">ResetParentGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetParentGroupId` <a name="ResetParentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetParentGroupId"></a>

```go
func ResetParentGroupId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConnectUserHierarchyGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.ConnectUserHierarchyGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.ConnectUserHierarchyGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.ConnectUserHierarchyGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.ConnectUserHierarchyGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConnectUserHierarchyGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectUserHierarchyGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectUserHierarchyGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConnectUserHierarchyGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyGroupId">HierarchyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyPath">HierarchyPath</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList">ConnectUserHierarchyGroupHierarchyPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.levelId">LevelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupIdInput">ParentGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupId">ParentGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HierarchyGroupId`<sup>Required</sup> <a name="HierarchyGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyGroupId"></a>

```go
func HierarchyGroupId() *string
```

- *Type:* *string

---

##### `HierarchyPath`<sup>Required</sup> <a name="HierarchyPath" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyPath"></a>

```go
func HierarchyPath() ConnectUserHierarchyGroupHierarchyPathList
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList">ConnectUserHierarchyGroupHierarchyPathList</a>

---

##### `LevelId`<sup>Required</sup> <a name="LevelId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.levelId"></a>

```go
func LevelId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentGroupIdInput`<sup>Optional</sup> <a name="ParentGroupIdInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupIdInput"></a>

```go
func ParentGroupIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentGroupId`<sup>Required</sup> <a name="ParentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupId"></a>

```go
func ParentGroupId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyGroupConfig <a name="ConnectUserHierarchyGroupConfig" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

&connectuserhierarchygroup.ConnectUserHierarchyGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Name: *string,
	Id: *string,
	ParentGroupId: *string,
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#instance_id ConnectUserHierarchyGroup#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#id ConnectUserHierarchyGroup#id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.parentGroupId">ParentGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#parent_group_id ConnectUserHierarchyGroup#parent_group_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#tags_all ConnectUserHierarchyGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#instance_id ConnectUserHierarchyGroup#instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#id ConnectUserHierarchyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParentGroupId`<sup>Optional</sup> <a name="ParentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.parentGroupId"></a>

```go
ParentGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#parent_group_id ConnectUserHierarchyGroup#parent_group_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#region ConnectUserHierarchyGroup#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_user_hierarchy_group#tags_all ConnectUserHierarchyGroup#tags_all}.

---

### ConnectUserHierarchyGroupHierarchyPath <a name="ConnectUserHierarchyGroupHierarchyPath" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

&connectuserhierarchygroup.ConnectUserHierarchyGroupHierarchyPath {

}
```


### ConnectUserHierarchyGroupHierarchyPathLevelFive <a name="ConnectUserHierarchyGroupHierarchyPathLevelFive" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

&connectuserhierarchygroup.ConnectUserHierarchyGroupHierarchyPathLevelFive {

}
```


### ConnectUserHierarchyGroupHierarchyPathLevelFour <a name="ConnectUserHierarchyGroupHierarchyPathLevelFour" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

&connectuserhierarchygroup.ConnectUserHierarchyGroupHierarchyPathLevelFour {

}
```


### ConnectUserHierarchyGroupHierarchyPathLevelOne <a name="ConnectUserHierarchyGroupHierarchyPathLevelOne" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

&connectuserhierarchygroup.ConnectUserHierarchyGroupHierarchyPathLevelOne {

}
```


### ConnectUserHierarchyGroupHierarchyPathLevelThree <a name="ConnectUserHierarchyGroupHierarchyPathLevelThree" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

&connectuserhierarchygroup.ConnectUserHierarchyGroupHierarchyPathLevelThree {

}
```


### ConnectUserHierarchyGroupHierarchyPathLevelTwo <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

&connectuserhierarchygroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyGroupHierarchyPathLevelFiveList <a name="ConnectUserHierarchyGroupHierarchyPathLevelFiveList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelFiveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelFiveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get"></a>

```go
func Get(index *f64) ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive">ConnectUserHierarchyGroupHierarchyPathLevelFive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyGroupHierarchyPathLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive">ConnectUserHierarchyGroupHierarchyPathLevelFive</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelFourList <a name="ConnectUserHierarchyGroupHierarchyPathLevelFourList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelFourList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelFourList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get"></a>

```go
func Get(index *f64) ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour">ConnectUserHierarchyGroupHierarchyPathLevelFour</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyGroupHierarchyPathLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour">ConnectUserHierarchyGroupHierarchyPathLevelFour</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelOneList <a name="ConnectUserHierarchyGroupHierarchyPathLevelOneList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelOneList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelOneList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get"></a>

```go
func Get(index *f64) ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne">ConnectUserHierarchyGroupHierarchyPathLevelOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyGroupHierarchyPathLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne">ConnectUserHierarchyGroupHierarchyPathLevelOne</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelThreeList <a name="ConnectUserHierarchyGroupHierarchyPathLevelThreeList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelThreeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelThreeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get"></a>

```go
func Get(index *f64) ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree">ConnectUserHierarchyGroupHierarchyPathLevelThree</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyGroupHierarchyPathLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree">ConnectUserHierarchyGroupHierarchyPathLevelThree</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelTwoList <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwoList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelTwoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelTwoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get"></a>

```go
func Get(index *f64) ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo">ConnectUserHierarchyGroupHierarchyPathLevelTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyGroupHierarchyPathLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo">ConnectUserHierarchyGroupHierarchyPathLevelTwo</a>

---


### ConnectUserHierarchyGroupHierarchyPathList <a name="ConnectUserHierarchyGroupHierarchyPathList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectUserHierarchyGroupHierarchyPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get"></a>

```go
func Get(index *f64) ConnectUserHierarchyGroupHierarchyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ConnectUserHierarchyGroupHierarchyPathOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectuserhierarchygroup"

connectuserhierarchygroup.NewConnectUserHierarchyGroupHierarchyPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectUserHierarchyGroupHierarchyPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive">LevelFive</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList">ConnectUserHierarchyGroupHierarchyPathLevelFiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour">LevelFour</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList">ConnectUserHierarchyGroupHierarchyPathLevelFourList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne">LevelOne</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList">ConnectUserHierarchyGroupHierarchyPathLevelOneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree">LevelThree</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList">ConnectUserHierarchyGroupHierarchyPathLevelThreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo">LevelTwo</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList">ConnectUserHierarchyGroupHierarchyPathLevelTwoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath">ConnectUserHierarchyGroupHierarchyPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelFive`<sup>Required</sup> <a name="LevelFive" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive"></a>

```go
func LevelFive() ConnectUserHierarchyGroupHierarchyPathLevelFiveList
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList">ConnectUserHierarchyGroupHierarchyPathLevelFiveList</a>

---

##### `LevelFour`<sup>Required</sup> <a name="LevelFour" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour"></a>

```go
func LevelFour() ConnectUserHierarchyGroupHierarchyPathLevelFourList
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList">ConnectUserHierarchyGroupHierarchyPathLevelFourList</a>

---

##### `LevelOne`<sup>Required</sup> <a name="LevelOne" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne"></a>

```go
func LevelOne() ConnectUserHierarchyGroupHierarchyPathLevelOneList
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList">ConnectUserHierarchyGroupHierarchyPathLevelOneList</a>

---

##### `LevelThree`<sup>Required</sup> <a name="LevelThree" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree"></a>

```go
func LevelThree() ConnectUserHierarchyGroupHierarchyPathLevelThreeList
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList">ConnectUserHierarchyGroupHierarchyPathLevelThreeList</a>

---

##### `LevelTwo`<sup>Required</sup> <a name="LevelTwo" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo"></a>

```go
func LevelTwo() ConnectUserHierarchyGroupHierarchyPathLevelTwoList
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList">ConnectUserHierarchyGroupHierarchyPathLevelTwoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyGroupHierarchyPath
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath">ConnectUserHierarchyGroupHierarchyPath</a>

---



