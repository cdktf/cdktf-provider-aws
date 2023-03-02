# `dynamodbTableReplica` Submodule <a name="`dynamodbTableReplica` Submodule" id="@cdktf/provider-aws.dynamodbTableReplica"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTableReplicaA <a name="DynamodbTableReplicaA" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica aws_dynamodb_table_replica}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtablereplica"

dynamodbtablereplica.NewDynamodbTableReplicaA(scope Construct, id *string, config DynamodbTableReplicaAConfig) DynamodbTableReplicaA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig">DynamodbTableReplicaAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig">DynamodbTableReplicaAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetPointInTimeRecovery">ResetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTableClassOverride">ResetTableClassOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts"></a>

```go
func PutTimeouts(value DynamodbTableReplicaTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetPointInTimeRecovery` <a name="ResetPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetPointInTimeRecovery"></a>

```go
func ResetPointInTimeRecovery()
```

##### `ResetTableClassOverride` <a name="ResetTableClassOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTableClassOverride"></a>

```go
func ResetTableClassOverride()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtablereplica"

dynamodbtablereplica.DynamodbTableReplicaA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtablereplica"

dynamodbtablereplica.DynamodbTableReplicaA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtablereplica"

dynamodbtablereplica.DynamodbTableReplicaA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference">DynamodbTableReplicaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArnInput">GlobalTableArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecoveryInput">PointInTimeRecoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverrideInput">TableClassOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArn">GlobalTableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverride">TableClassOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeouts"></a>

```go
func Timeouts() DynamodbTableReplicaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference">DynamodbTableReplicaTimeoutsOutputReference</a>

---

##### `GlobalTableArnInput`<sup>Optional</sup> <a name="GlobalTableArnInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArnInput"></a>

```go
func GlobalTableArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryInput`<sup>Optional</sup> <a name="PointInTimeRecoveryInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecoveryInput"></a>

```go
func PointInTimeRecoveryInput() interface{}
```

- *Type:* interface{}

---

##### `TableClassOverrideInput`<sup>Optional</sup> <a name="TableClassOverrideInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverrideInput"></a>

```go
func TableClassOverrideInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalTableArn`<sup>Required</sup> <a name="GlobalTableArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArn"></a>

```go
func GlobalTableArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `PointInTimeRecovery`<sup>Required</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecovery"></a>

```go
func PointInTimeRecovery() interface{}
```

- *Type:* interface{}

---

##### `TableClassOverride`<sup>Required</sup> <a name="TableClassOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverride"></a>

```go
func TableClassOverride() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableReplicaAConfig <a name="DynamodbTableReplicaAConfig" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtablereplica"

&dynamodbtablereplica.DynamodbTableReplicaAConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GlobalTableArn: *string,
	Id: *string,
	KmsKeyArn: *string,
	PointInTimeRecovery: interface{},
	TableClassOverride: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.globalTableArn">GlobalTableArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#id DynamodbTableReplicaA#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tableClassOverride">TableClassOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlobalTableArn`<sup>Required</sup> <a name="GlobalTableArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.globalTableArn"></a>

```go
GlobalTableArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#id DynamodbTableReplicaA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}.

---

##### `PointInTimeRecovery`<sup>Optional</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.pointInTimeRecovery"></a>

```go
PointInTimeRecovery interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}.

---

##### `TableClassOverride`<sup>Optional</sup> <a name="TableClassOverride" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tableClassOverride"></a>

```go
TableClassOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.timeouts"></a>

```go
Timeouts DynamodbTableReplicaTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#timeouts DynamodbTableReplicaA#timeouts}

---

### DynamodbTableReplicaTimeouts <a name="DynamodbTableReplicaTimeouts" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtablereplica"

&dynamodbtablereplica.DynamodbTableReplicaTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#create DynamodbTableReplicaA#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#delete DynamodbTableReplicaA#delete}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#update DynamodbTableReplicaA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#create DynamodbTableReplicaA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#delete DynamodbTableReplicaA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_replica#update DynamodbTableReplicaA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableReplicaTimeoutsOutputReference <a name="DynamodbTableReplicaTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dynamodbtablereplica"

dynamodbtablereplica.NewDynamodbTableReplicaTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynamodbTableReplicaTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



