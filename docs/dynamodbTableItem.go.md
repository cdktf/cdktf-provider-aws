# `dynamodbTableItem` Submodule <a name="`dynamodbTableItem` Submodule" id="@cdktf/provider-aws.dynamodbTableItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTableItem <a name="DynamodbTableItem" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item aws_dynamodb_table_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtableitem"

dynamodbtableitem.NewDynamodbTableItem(scope Construct, id *string, config DynamodbTableItemConfig) DynamodbTableItem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig">DynamodbTableItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig">DynamodbTableItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.resetRangeKey">ResetRangeKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.resetId"></a>

```go
func ResetId()
```

##### `ResetRangeKey` <a name="ResetRangeKey" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.resetRangeKey"></a>

```go
func ResetRangeKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtableitem"

dynamodbtableitem.DynamodbTableItem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtableitem"

dynamodbtableitem.DynamodbTableItem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtableitem"

dynamodbtableitem.DynamodbTableItem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.hashKeyInput">HashKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.itemInput">ItemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.rangeKeyInput">RangeKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.hashKey">HashKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.item">Item</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.rangeKey">RangeKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HashKeyInput`<sup>Optional</sup> <a name="HashKeyInput" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.hashKeyInput"></a>

```go
func HashKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItemInput`<sup>Optional</sup> <a name="ItemInput" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.itemInput"></a>

```go
func ItemInput() *string
```

- *Type:* *string

---

##### `RangeKeyInput`<sup>Optional</sup> <a name="RangeKeyInput" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.rangeKeyInput"></a>

```go
func RangeKeyInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `HashKey`<sup>Required</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.hashKey"></a>

```go
func HashKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Item`<sup>Required</sup> <a name="Item" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.item"></a>

```go
func Item() *string
```

- *Type:* *string

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.rangeKey"></a>

```go
func RangeKey() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableItemConfig <a name="DynamodbTableItemConfig" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtableitem"

&dynamodbtableitem.DynamodbTableItemConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HashKey: *string,
	Item: *string,
	TableName: *string,
	Id: *string,
	RangeKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.hashKey">HashKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#hash_key DynamodbTableItem#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.item">Item</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#item DynamodbTableItem#item}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#table_name DynamodbTableItem#table_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#id DynamodbTableItem#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.rangeKey">RangeKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#range_key DynamodbTableItem#range_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HashKey`<sup>Required</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.hashKey"></a>

```go
HashKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#hash_key DynamodbTableItem#hash_key}.

---

##### `Item`<sup>Required</sup> <a name="Item" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.item"></a>

```go
Item *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#item DynamodbTableItem#item}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#table_name DynamodbTableItem#table_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#id DynamodbTableItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RangeKey`<sup>Optional</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTableItem.DynamodbTableItemConfig.property.rangeKey"></a>

```go
RangeKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item#range_key DynamodbTableItem#range_key}.

---



