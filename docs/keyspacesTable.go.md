# `keyspacesTable` Submodule <a name="`keyspacesTable` Submodule" id="@cdktf/provider-aws.keyspacesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyspacesTable <a name="KeyspacesTable" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table aws_keyspaces_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTable(scope Construct, id *string, config KeyspacesTableConfig) KeyspacesTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig">KeyspacesTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig">KeyspacesTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification">PutCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment">PutComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification">PutEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery">PutPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition">PutSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetCapacitySpecification">ResetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetDefaultTimeToLive">ResetDefaultTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetEncryptionSpecification">ResetEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetPointInTimeRecovery">ResetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCapacitySpecification` <a name="PutCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification"></a>

```go
func PutCapacitySpecification(value KeyspacesTableCapacitySpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---

##### `PutComment` <a name="PutComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment"></a>

```go
func PutComment(value KeyspacesTableComment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---

##### `PutEncryptionSpecification` <a name="PutEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification"></a>

```go
func PutEncryptionSpecification(value KeyspacesTableEncryptionSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---

##### `PutPointInTimeRecovery` <a name="PutPointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery"></a>

```go
func PutPointInTimeRecovery(value KeyspacesTablePointInTimeRecovery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---

##### `PutSchemaDefinition` <a name="PutSchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition"></a>

```go
func PutSchemaDefinition(value KeyspacesTableSchemaDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts"></a>

```go
func PutTimeouts(value KeyspacesTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

---

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl"></a>

```go
func PutTtl(value KeyspacesTableTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---

##### `ResetCapacitySpecification` <a name="ResetCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetCapacitySpecification"></a>

```go
func ResetCapacitySpecification()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDefaultTimeToLive` <a name="ResetDefaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetDefaultTimeToLive"></a>

```go
func ResetDefaultTimeToLive()
```

##### `ResetEncryptionSpecification` <a name="ResetEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetEncryptionSpecification"></a>

```go
func ResetEncryptionSpecification()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetId"></a>

```go
func ResetId()
```

##### `ResetPointInTimeRecovery` <a name="ResetPointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetPointInTimeRecovery"></a>

```go
func ResetPointInTimeRecovery()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.KeyspacesTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.KeyspacesTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.KeyspacesTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecification">CapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference">KeyspacesTableCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference">KeyspacesTableCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecification">EncryptionSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference">KeyspacesTableEncryptionSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference">KeyspacesTablePointInTimeRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinition">SchemaDefinition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference">KeyspacesTableSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference">KeyspacesTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference">KeyspacesTableTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecificationInput">CapacitySpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.commentInput">CommentInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLiveInput">DefaultTimeToLiveInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecificationInput">EncryptionSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceNameInput">KeyspaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecoveryInput">PointInTimeRecoveryInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLive">DefaultTimeToLive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceName">KeyspaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacitySpecification`<sup>Required</sup> <a name="CapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecification"></a>

```go
func CapacitySpecification() KeyspacesTableCapacitySpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference">KeyspacesTableCapacitySpecificationOutputReference</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.comment"></a>

```go
func Comment() KeyspacesTableCommentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference">KeyspacesTableCommentOutputReference</a>

---

##### `EncryptionSpecification`<sup>Required</sup> <a name="EncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecification"></a>

```go
func EncryptionSpecification() KeyspacesTableEncryptionSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference">KeyspacesTableEncryptionSpecificationOutputReference</a>

---

##### `PointInTimeRecovery`<sup>Required</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecovery"></a>

```go
func PointInTimeRecovery() KeyspacesTablePointInTimeRecoveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference">KeyspacesTablePointInTimeRecoveryOutputReference</a>

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinition"></a>

```go
func SchemaDefinition() KeyspacesTableSchemaDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference">KeyspacesTableSchemaDefinitionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeouts"></a>

```go
func Timeouts() KeyspacesTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference">KeyspacesTableTimeoutsOutputReference</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttl"></a>

```go
func Ttl() KeyspacesTableTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference">KeyspacesTableTtlOutputReference</a>

---

##### `CapacitySpecificationInput`<sup>Optional</sup> <a name="CapacitySpecificationInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecificationInput"></a>

```go
func CapacitySpecificationInput() KeyspacesTableCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.commentInput"></a>

```go
func CommentInput() KeyspacesTableComment
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---

##### `DefaultTimeToLiveInput`<sup>Optional</sup> <a name="DefaultTimeToLiveInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLiveInput"></a>

```go
func DefaultTimeToLiveInput() *f64
```

- *Type:* *f64

---

##### `EncryptionSpecificationInput`<sup>Optional</sup> <a name="EncryptionSpecificationInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecificationInput"></a>

```go
func EncryptionSpecificationInput() KeyspacesTableEncryptionSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyspaceNameInput`<sup>Optional</sup> <a name="KeyspaceNameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceNameInput"></a>

```go
func KeyspaceNameInput() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryInput`<sup>Optional</sup> <a name="PointInTimeRecoveryInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecoveryInput"></a>

```go
func PointInTimeRecoveryInput() KeyspacesTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinitionInput"></a>

```go
func SchemaDefinitionInput() KeyspacesTableSchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttlInput"></a>

```go
func TtlInput() KeyspacesTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---

##### `DefaultTimeToLive`<sup>Required</sup> <a name="DefaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLive"></a>

```go
func DefaultTimeToLive() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyspaceName`<sup>Required</sup> <a name="KeyspaceName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceName"></a>

```go
func KeyspaceName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyspacesTableCapacitySpecification <a name="KeyspacesTableCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableCapacitySpecification {
	ReadCapacityUnits: *f64,
	ThroughputMode: *string,
	WriteCapacityUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}. |

---

##### `ReadCapacityUnits`<sup>Optional</sup> <a name="ReadCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.readCapacityUnits"></a>

```go
ReadCapacityUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}.

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.throughputMode"></a>

```go
ThroughputMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}.

---

##### `WriteCapacityUnits`<sup>Optional</sup> <a name="WriteCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.writeCapacityUnits"></a>

```go
WriteCapacityUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}.

---

### KeyspacesTableComment <a name="KeyspacesTableComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableComment {
	Message: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}.

---

### KeyspacesTableConfig <a name="KeyspacesTableConfig" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyspaceName: *string,
	SchemaDefinition: github.com/cdktf/cdktf-provider-aws-go/aws.keyspacesTable.KeyspacesTableSchemaDefinition,
	TableName: *string,
	CapacitySpecification: github.com/cdktf/cdktf-provider-aws-go/aws.keyspacesTable.KeyspacesTableCapacitySpecification,
	Comment: github.com/cdktf/cdktf-provider-aws-go/aws.keyspacesTable.KeyspacesTableComment,
	DefaultTimeToLive: *f64,
	EncryptionSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.keyspacesTable.KeyspacesTableEncryptionSpecification,
	Id: *string,
	PointInTimeRecovery: github.com/cdktf/cdktf-provider-aws-go/aws.keyspacesTable.KeyspacesTablePointInTimeRecovery,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.keyspacesTable.KeyspacesTableTimeouts,
	Ttl: github.com/cdktf/cdktf-provider-aws-go/aws.keyspacesTable.KeyspacesTableTtl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.keyspaceName">KeyspaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.schemaDefinition">SchemaDefinition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | schema_definition block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.capacitySpecification">CapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | comment block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.defaultTimeToLive">DefaultTimeToLive</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.encryptionSpecification">EncryptionSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | encryption_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | ttl block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyspaceName`<sup>Required</sup> <a name="KeyspaceName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.keyspaceName"></a>

```go
KeyspaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}.

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.schemaDefinition"></a>

```go
SchemaDefinition KeyspacesTableSchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

schema_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#schema_definition KeyspacesTable#schema_definition}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}.

---

##### `CapacitySpecification`<sup>Optional</sup> <a name="CapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.capacitySpecification"></a>

```go
CapacitySpecification KeyspacesTableCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#capacity_specification KeyspacesTable#capacity_specification}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.comment"></a>

```go
Comment KeyspacesTableComment
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

comment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#comment KeyspacesTable#comment}

---

##### `DefaultTimeToLive`<sup>Optional</sup> <a name="DefaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.defaultTimeToLive"></a>

```go
DefaultTimeToLive *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}.

---

##### `EncryptionSpecification`<sup>Optional</sup> <a name="EncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.encryptionSpecification"></a>

```go
EncryptionSpecification KeyspacesTableEncryptionSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

encryption_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#encryption_specification KeyspacesTable#encryption_specification}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PointInTimeRecovery`<sup>Optional</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.pointInTimeRecovery"></a>

```go
PointInTimeRecovery KeyspacesTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#point_in_time_recovery KeyspacesTable#point_in_time_recovery}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.timeouts"></a>

```go
Timeouts KeyspacesTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#timeouts KeyspacesTable#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.ttl"></a>

```go
Ttl KeyspacesTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#ttl KeyspacesTable#ttl}

---

### KeyspacesTableEncryptionSpecification <a name="KeyspacesTableEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableEncryptionSpecification {
	KmsKeyIdentifier: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}. |

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.kmsKeyIdentifier"></a>

```go
KmsKeyIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

### KeyspacesTablePointInTimeRecovery <a name="KeyspacesTablePointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTablePointInTimeRecovery {
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

### KeyspacesTableSchemaDefinition <a name="KeyspacesTableSchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableSchemaDefinition {
	Column: interface{},
	PartitionKey: interface{},
	ClusteringKey: interface{},
	StaticColumn: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.column">Column</a></code> | <code>interface{}</code> | column block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.partitionKey">PartitionKey</a></code> | <code>interface{}</code> | partition_key block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.clusteringKey">ClusteringKey</a></code> | <code>interface{}</code> | clustering_key block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.staticColumn">StaticColumn</a></code> | <code>interface{}</code> | static_column block. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.column"></a>

```go
Column interface{}
```

- *Type:* interface{}

column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#column KeyspacesTable#column}

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.partitionKey"></a>

```go
PartitionKey interface{}
```

- *Type:* interface{}

partition_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#partition_key KeyspacesTable#partition_key}

---

##### `ClusteringKey`<sup>Optional</sup> <a name="ClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.clusteringKey"></a>

```go
ClusteringKey interface{}
```

- *Type:* interface{}

clustering_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#clustering_key KeyspacesTable#clustering_key}

---

##### `StaticColumn`<sup>Optional</sup> <a name="StaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.staticColumn"></a>

```go
StaticColumn interface{}
```

- *Type:* interface{}

static_column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#static_column KeyspacesTable#static_column}

---

### KeyspacesTableSchemaDefinitionClusteringKey <a name="KeyspacesTableSchemaDefinitionClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableSchemaDefinitionClusteringKey {
	Name: *string,
	OrderBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.orderBy">OrderBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#order_by KeyspacesTable#order_by}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#order_by KeyspacesTable#order_by}.

---

### KeyspacesTableSchemaDefinitionColumn <a name="KeyspacesTableSchemaDefinitionColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableSchemaDefinitionColumn {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

### KeyspacesTableSchemaDefinitionPartitionKey <a name="KeyspacesTableSchemaDefinitionPartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableSchemaDefinitionPartitionKey {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

### KeyspacesTableSchemaDefinitionStaticColumn <a name="KeyspacesTableSchemaDefinitionStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableSchemaDefinitionStaticColumn {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

### KeyspacesTableTimeouts <a name="KeyspacesTableTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}.

---

### KeyspacesTableTtl <a name="KeyspacesTableTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

&keyspacestable.KeyspacesTableTtl {
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyspacesTableCapacitySpecificationOutputReference <a name="KeyspacesTableCapacitySpecificationOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableCapacitySpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyspacesTableCapacitySpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetReadCapacityUnits">ResetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetWriteCapacityUnits">ResetWriteCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadCapacityUnits` <a name="ResetReadCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetReadCapacityUnits"></a>

```go
func ResetReadCapacityUnits()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetThroughputMode"></a>

```go
func ResetThroughputMode()
```

##### `ResetWriteCapacityUnits` <a name="ResetWriteCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetWriteCapacityUnits"></a>

```go
func ResetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnitsInput">ReadCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputModeInput">ThroughputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnitsInput">WriteCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityUnitsInput`<sup>Optional</sup> <a name="ReadCapacityUnitsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnitsInput"></a>

```go
func ReadCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputModeInput"></a>

```go
func ThroughputModeInput() *string
```

- *Type:* *string

---

##### `WriteCapacityUnitsInput`<sup>Optional</sup> <a name="WriteCapacityUnitsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnitsInput"></a>

```go
func WriteCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputMode"></a>

```go
func ThroughputMode() *string
```

- *Type:* *string

---

##### `WriteCapacityUnits`<sup>Required</sup> <a name="WriteCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnits"></a>

```go
func WriteCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyspacesTableCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---


### KeyspacesTableCommentOutputReference <a name="KeyspacesTableCommentOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableCommentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyspacesTableCommentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resetMessage"></a>

```go
func ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyspacesTableComment
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---


### KeyspacesTableEncryptionSpecificationOutputReference <a name="KeyspacesTableEncryptionSpecificationOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableEncryptionSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyspacesTableEncryptionSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier"></a>

```go
func ResetKmsKeyIdentifier()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput"></a>

```go
func KmsKeyIdentifierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier"></a>

```go
func KmsKeyIdentifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyspacesTableEncryptionSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---


### KeyspacesTablePointInTimeRecoveryOutputReference <a name="KeyspacesTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTablePointInTimeRecoveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyspacesTablePointInTimeRecoveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyspacesTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---


### KeyspacesTableSchemaDefinitionClusteringKeyList <a name="KeyspacesTableSchemaDefinitionClusteringKeyList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionClusteringKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyspacesTableSchemaDefinitionClusteringKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get"></a>

```go
func Get(index *f64) KeyspacesTableSchemaDefinitionClusteringKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableSchemaDefinitionClusteringKeyOutputReference <a name="KeyspacesTableSchemaDefinitionClusteringKeyOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionClusteringKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyspacesTableSchemaDefinitionClusteringKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableSchemaDefinitionColumnList <a name="KeyspacesTableSchemaDefinitionColumnList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyspacesTableSchemaDefinitionColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get"></a>

```go
func Get(index *f64) KeyspacesTableSchemaDefinitionColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableSchemaDefinitionColumnOutputReference <a name="KeyspacesTableSchemaDefinitionColumnOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyspacesTableSchemaDefinitionColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableSchemaDefinitionOutputReference <a name="KeyspacesTableSchemaDefinitionOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyspacesTableSchemaDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey">PutClusteringKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey">PutPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn">PutStaticColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetClusteringKey">ResetClusteringKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetStaticColumn">ResetStaticColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusteringKey` <a name="PutClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey"></a>

```go
func PutClusteringKey(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey.parameter.value"></a>

- *Type:* interface{}

---

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn"></a>

```go
func PutColumn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPartitionKey` <a name="PutPartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey"></a>

```go
func PutPartitionKey(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStaticColumn` <a name="PutStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn"></a>

```go
func PutStaticColumn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClusteringKey` <a name="ResetClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetClusteringKey"></a>

```go
func ResetClusteringKey()
```

##### `ResetStaticColumn` <a name="ResetStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetStaticColumn"></a>

```go
func ResetStaticColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKey">ClusteringKey</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList">KeyspacesTableSchemaDefinitionClusteringKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList">KeyspacesTableSchemaDefinitionColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKey">PartitionKey</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList">KeyspacesTableSchemaDefinitionPartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumn">StaticColumn</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList">KeyspacesTableSchemaDefinitionStaticColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKeyInput">ClusteringKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.columnInput">ColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumnInput">StaticColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusteringKey`<sup>Required</sup> <a name="ClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKey"></a>

```go
func ClusteringKey() KeyspacesTableSchemaDefinitionClusteringKeyList
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList">KeyspacesTableSchemaDefinitionClusteringKeyList</a>

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.column"></a>

```go
func Column() KeyspacesTableSchemaDefinitionColumnList
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList">KeyspacesTableSchemaDefinitionColumnList</a>

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKey"></a>

```go
func PartitionKey() KeyspacesTableSchemaDefinitionPartitionKeyList
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList">KeyspacesTableSchemaDefinitionPartitionKeyList</a>

---

##### `StaticColumn`<sup>Required</sup> <a name="StaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumn"></a>

```go
func StaticColumn() KeyspacesTableSchemaDefinitionStaticColumnList
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList">KeyspacesTableSchemaDefinitionStaticColumnList</a>

---

##### `ClusteringKeyInput`<sup>Optional</sup> <a name="ClusteringKeyInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKeyInput"></a>

```go
func ClusteringKeyInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.columnInput"></a>

```go
func ColumnInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKeyInput"></a>

```go
func PartitionKeyInput() interface{}
```

- *Type:* interface{}

---

##### `StaticColumnInput`<sup>Optional</sup> <a name="StaticColumnInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumnInput"></a>

```go
func StaticColumnInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyspacesTableSchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---


### KeyspacesTableSchemaDefinitionPartitionKeyList <a name="KeyspacesTableSchemaDefinitionPartitionKeyList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionPartitionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyspacesTableSchemaDefinitionPartitionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get"></a>

```go
func Get(index *f64) KeyspacesTableSchemaDefinitionPartitionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableSchemaDefinitionPartitionKeyOutputReference <a name="KeyspacesTableSchemaDefinitionPartitionKeyOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionPartitionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyspacesTableSchemaDefinitionPartitionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableSchemaDefinitionStaticColumnList <a name="KeyspacesTableSchemaDefinitionStaticColumnList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionStaticColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyspacesTableSchemaDefinitionStaticColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get"></a>

```go
func Get(index *f64) KeyspacesTableSchemaDefinitionStaticColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableSchemaDefinitionStaticColumnOutputReference <a name="KeyspacesTableSchemaDefinitionStaticColumnOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableSchemaDefinitionStaticColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyspacesTableSchemaDefinitionStaticColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableTimeoutsOutputReference <a name="KeyspacesTableTimeoutsOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyspacesTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyspacesTableTtlOutputReference <a name="KeyspacesTableTtlOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/keyspacestable"

keyspacestable.NewKeyspacesTableTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyspacesTableTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyspacesTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---



