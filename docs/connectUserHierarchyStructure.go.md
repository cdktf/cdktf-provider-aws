# `connectUserHierarchyStructure` Submodule <a name="`connectUserHierarchyStructure` Submodule" id="@cdktf/provider-aws.connectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyStructure <a name="ConnectUserHierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.NewConnectUserHierarchyStructure(scope Construct, id *string, config ConnectUserHierarchyStructureConfig) ConnectUserHierarchyStructure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig">ConnectUserHierarchyStructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig">ConnectUserHierarchyStructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure">PutHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHierarchyStructure` <a name="PutHierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure"></a>

```go
func PutHierarchyStructure(value ConnectUserHierarchyStructureHierarchyStructure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.ConnectUserHierarchyStructure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.ConnectUserHierarchyStructure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.ConnectUserHierarchyStructure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructure">HierarchyStructure</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference">ConnectUserHierarchyStructureHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructureInput">HierarchyStructureInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HierarchyStructure`<sup>Required</sup> <a name="HierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructure"></a>

```go
func HierarchyStructure() ConnectUserHierarchyStructureHierarchyStructureOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference">ConnectUserHierarchyStructureHierarchyStructureOutputReference</a>

---

##### `HierarchyStructureInput`<sup>Optional</sup> <a name="HierarchyStructureInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructureInput"></a>

```go
func HierarchyStructureInput() ConnectUserHierarchyStructureHierarchyStructure
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyStructureConfig <a name="ConnectUserHierarchyStructureConfig" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

&connectuserhierarchystructure.ConnectUserHierarchyStructureConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HierarchyStructure: github.com/cdktf/cdktf-provider-aws-go/aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure,
	InstanceId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.hierarchyStructure">HierarchyStructure</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | hierarchy_structure block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HierarchyStructure`<sup>Required</sup> <a name="HierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.hierarchyStructure"></a>

```go
HierarchyStructure ConnectUserHierarchyStructureHierarchyStructure
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

hierarchy_structure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#hierarchy_structure ConnectUserHierarchyStructure#hierarchy_structure}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectUserHierarchyStructureHierarchyStructure <a name="ConnectUserHierarchyStructureHierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

&connectuserhierarchystructure.ConnectUserHierarchyStructureHierarchyStructure {
	LevelFive: github.com/cdktf/cdktf-provider-aws-go/aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive,
	LevelFour: github.com/cdktf/cdktf-provider-aws-go/aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour,
	LevelOne: github.com/cdktf/cdktf-provider-aws-go/aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne,
	LevelThree: github.com/cdktf/cdktf-provider-aws-go/aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree,
	LevelTwo: github.com/cdktf/cdktf-provider-aws-go/aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFive">LevelFive</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | level_five block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFour">LevelFour</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | level_four block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelOne">LevelOne</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | level_one block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelThree">LevelThree</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | level_three block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelTwo">LevelTwo</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | level_two block. |

---

##### `LevelFive`<sup>Optional</sup> <a name="LevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFive"></a>

```go
LevelFive ConnectUserHierarchyStructureHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

level_five block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

##### `LevelFour`<sup>Optional</sup> <a name="LevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFour"></a>

```go
LevelFour ConnectUserHierarchyStructureHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

level_four block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

##### `LevelOne`<sup>Optional</sup> <a name="LevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelOne"></a>

```go
LevelOne ConnectUserHierarchyStructureHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

level_one block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

##### `LevelThree`<sup>Optional</sup> <a name="LevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelThree"></a>

```go
LevelThree ConnectUserHierarchyStructureHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

level_three block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

##### `LevelTwo`<sup>Optional</sup> <a name="LevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelTwo"></a>

```go
LevelTwo ConnectUserHierarchyStructureHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

level_two block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

### ConnectUserHierarchyStructureHierarchyStructureLevelFive <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

&connectuserhierarchystructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelFour <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

&connectuserhierarchystructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelOne <a name="ConnectUserHierarchyStructureHierarchyStructureLevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

&connectuserhierarchystructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelThree <a name="ConnectUserHierarchyStructureHierarchyStructureLevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

&connectuserhierarchystructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelTwo <a name="ConnectUserHierarchyStructureHierarchyStructureLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

&connectuserhierarchystructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.NewConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyStructureHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.NewConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyStructureHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.NewConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyStructureHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.NewConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyStructureHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.NewConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyStructureHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---


### ConnectUserHierarchyStructureHierarchyStructureOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectuserhierarchystructure"

connectuserhierarchystructure.NewConnectUserHierarchyStructureHierarchyStructureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectUserHierarchyStructureHierarchyStructureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive">PutLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour">PutLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne">PutLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree">PutLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo">PutLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFive">ResetLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFour">ResetLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelOne">ResetLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelThree">ResetLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelTwo">ResetLevelTwo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLevelFive` <a name="PutLevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive"></a>

```go
func PutLevelFive(value ConnectUserHierarchyStructureHierarchyStructureLevelFive)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---

##### `PutLevelFour` <a name="PutLevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour"></a>

```go
func PutLevelFour(value ConnectUserHierarchyStructureHierarchyStructureLevelFour)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---

##### `PutLevelOne` <a name="PutLevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne"></a>

```go
func PutLevelOne(value ConnectUserHierarchyStructureHierarchyStructureLevelOne)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---

##### `PutLevelThree` <a name="PutLevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree"></a>

```go
func PutLevelThree(value ConnectUserHierarchyStructureHierarchyStructureLevelThree)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---

##### `PutLevelTwo` <a name="PutLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo"></a>

```go
func PutLevelTwo(value ConnectUserHierarchyStructureHierarchyStructureLevelTwo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---

##### `ResetLevelFive` <a name="ResetLevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFive"></a>

```go
func ResetLevelFive()
```

##### `ResetLevelFour` <a name="ResetLevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFour"></a>

```go
func ResetLevelFour()
```

##### `ResetLevelOne` <a name="ResetLevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelOne"></a>

```go
func ResetLevelOne()
```

##### `ResetLevelThree` <a name="ResetLevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelThree"></a>

```go
func ResetLevelThree()
```

##### `ResetLevelTwo` <a name="ResetLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelTwo"></a>

```go
func ResetLevelTwo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive">LevelFive</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour">LevelFour</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne">LevelOne</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree">LevelThree</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo">LevelTwo</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFiveInput">LevelFiveInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFourInput">LevelFourInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOneInput">LevelOneInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThreeInput">LevelThreeInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwoInput">LevelTwoInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelFive`<sup>Required</sup> <a name="LevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive"></a>

```go
func LevelFive() ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference</a>

---

##### `LevelFour`<sup>Required</sup> <a name="LevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour"></a>

```go
func LevelFour() ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference</a>

---

##### `LevelOne`<sup>Required</sup> <a name="LevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne"></a>

```go
func LevelOne() ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference</a>

---

##### `LevelThree`<sup>Required</sup> <a name="LevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree"></a>

```go
func LevelThree() ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference</a>

---

##### `LevelTwo`<sup>Required</sup> <a name="LevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo"></a>

```go
func LevelTwo() ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference</a>

---

##### `LevelFiveInput`<sup>Optional</sup> <a name="LevelFiveInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFiveInput"></a>

```go
func LevelFiveInput() ConnectUserHierarchyStructureHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---

##### `LevelFourInput`<sup>Optional</sup> <a name="LevelFourInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFourInput"></a>

```go
func LevelFourInput() ConnectUserHierarchyStructureHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---

##### `LevelOneInput`<sup>Optional</sup> <a name="LevelOneInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOneInput"></a>

```go
func LevelOneInput() ConnectUserHierarchyStructureHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---

##### `LevelThreeInput`<sup>Optional</sup> <a name="LevelThreeInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThreeInput"></a>

```go
func LevelThreeInput() ConnectUserHierarchyStructureHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---

##### `LevelTwoInput`<sup>Optional</sup> <a name="LevelTwoInput" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwoInput"></a>

```go
func LevelTwoInput() ConnectUserHierarchyStructureHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectUserHierarchyStructureHierarchyStructure
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

---



