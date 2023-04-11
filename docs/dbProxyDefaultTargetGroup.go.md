# `dbProxyDefaultTargetGroup` Submodule <a name="`dbProxyDefaultTargetGroup` Submodule" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbProxyDefaultTargetGroup <a name="DbProxyDefaultTargetGroup" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group aws_db_proxy_default_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

dbproxydefaulttargetgroup.NewDbProxyDefaultTargetGroup(scope Construct, id *string, config DbProxyDefaultTargetGroupConfig) DbProxyDefaultTargetGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig">DbProxyDefaultTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig">DbProxyDefaultTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig">PutConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetConnectionPoolConfig">ResetConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConnectionPoolConfig` <a name="PutConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig"></a>

```go
func PutConnectionPoolConfig(value DbProxyDefaultTargetGroupConnectionPoolConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts"></a>

```go
func PutTimeouts(value DbProxyDefaultTargetGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

---

##### `ResetConnectionPoolConfig` <a name="ResetConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetConnectionPoolConfig"></a>

```go
func ResetConnectionPoolConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

dbproxydefaulttargetgroup.DbProxyDefaultTargetGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

dbproxydefaulttargetgroup.DbProxyDefaultTargetGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

dbproxydefaulttargetgroup.DbProxyDefaultTargetGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfig">ConnectionPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference">DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference">DbProxyDefaultTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfigInput">ConnectionPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyNameInput">DbProxyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyName">DbProxyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConnectionPoolConfig`<sup>Required</sup> <a name="ConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfig"></a>

```go
func ConnectionPoolConfig() DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference">DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeouts"></a>

```go
func Timeouts() DbProxyDefaultTargetGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference">DbProxyDefaultTargetGroupTimeoutsOutputReference</a>

---

##### `ConnectionPoolConfigInput`<sup>Optional</sup> <a name="ConnectionPoolConfigInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfigInput"></a>

```go
func ConnectionPoolConfigInput() DbProxyDefaultTargetGroupConnectionPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---

##### `DbProxyNameInput`<sup>Optional</sup> <a name="DbProxyNameInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyNameInput"></a>

```go
func DbProxyNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyName"></a>

```go
func DbProxyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DbProxyDefaultTargetGroupConfig <a name="DbProxyDefaultTargetGroupConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

&dbproxydefaulttargetgroup.DbProxyDefaultTargetGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DbProxyName: *string,
	ConnectionPoolConfig: github.com/cdktf/cdktf-provider-aws-go/aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dbProxyName">DbProxyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connectionPoolConfig">ConnectionPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | connection_pool_config block. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dbProxyName"></a>

```go
DbProxyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}.

---

##### `ConnectionPoolConfig`<sup>Optional</sup> <a name="ConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connectionPoolConfig"></a>

```go
ConnectionPoolConfig DbProxyDefaultTargetGroupConnectionPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

connection_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.timeouts"></a>

```go
Timeouts DbProxyDefaultTargetGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}

---

### DbProxyDefaultTargetGroupConnectionPoolConfig <a name="DbProxyDefaultTargetGroupConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

&dbproxydefaulttargetgroup.DbProxyDefaultTargetGroupConnectionPoolConfig {
	ConnectionBorrowTimeout: *f64,
	InitQuery: *string,
	MaxConnectionsPercent: *f64,
	MaxIdleConnectionsPercent: *f64,
	SessionPinningFilters: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.connectionBorrowTimeout">ConnectionBorrowTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.initQuery">InitQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxConnectionsPercent">MaxConnectionsPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxIdleConnectionsPercent">MaxIdleConnectionsPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.sessionPinningFilters">SessionPinningFilters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}. |

---

##### `ConnectionBorrowTimeout`<sup>Optional</sup> <a name="ConnectionBorrowTimeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.connectionBorrowTimeout"></a>

```go
ConnectionBorrowTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}.

---

##### `InitQuery`<sup>Optional</sup> <a name="InitQuery" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.initQuery"></a>

```go
InitQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}.

---

##### `MaxConnectionsPercent`<sup>Optional</sup> <a name="MaxConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxConnectionsPercent"></a>

```go
MaxConnectionsPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}.

---

##### `MaxIdleConnectionsPercent`<sup>Optional</sup> <a name="MaxIdleConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxIdleConnectionsPercent"></a>

```go
MaxIdleConnectionsPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}.

---

##### `SessionPinningFilters`<sup>Optional</sup> <a name="SessionPinningFilters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.sessionPinningFilters"></a>

```go
SessionPinningFilters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}.

---

### DbProxyDefaultTargetGroupTimeouts <a name="DbProxyDefaultTargetGroupTimeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

&dbproxydefaulttargetgroup.DbProxyDefaultTargetGroupTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference <a name="DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

dbproxydefaulttargetgroup.NewDbProxyDefaultTargetGroupConnectionPoolConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetConnectionBorrowTimeout">ResetConnectionBorrowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetInitQuery">ResetInitQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxConnectionsPercent">ResetMaxConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxIdleConnectionsPercent">ResetMaxIdleConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetSessionPinningFilters">ResetSessionPinningFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionBorrowTimeout` <a name="ResetConnectionBorrowTimeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetConnectionBorrowTimeout"></a>

```go
func ResetConnectionBorrowTimeout()
```

##### `ResetInitQuery` <a name="ResetInitQuery" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetInitQuery"></a>

```go
func ResetInitQuery()
```

##### `ResetMaxConnectionsPercent` <a name="ResetMaxConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxConnectionsPercent"></a>

```go
func ResetMaxConnectionsPercent()
```

##### `ResetMaxIdleConnectionsPercent` <a name="ResetMaxIdleConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxIdleConnectionsPercent"></a>

```go
func ResetMaxIdleConnectionsPercent()
```

##### `ResetSessionPinningFilters` <a name="ResetSessionPinningFilters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetSessionPinningFilters"></a>

```go
func ResetSessionPinningFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeoutInput">ConnectionBorrowTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQueryInput">InitQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercentInput">MaxConnectionsPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercentInput">MaxIdleConnectionsPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFiltersInput">SessionPinningFiltersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeout">ConnectionBorrowTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQuery">InitQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercent">MaxConnectionsPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercent">MaxIdleConnectionsPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFilters">SessionPinningFilters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionBorrowTimeoutInput`<sup>Optional</sup> <a name="ConnectionBorrowTimeoutInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeoutInput"></a>

```go
func ConnectionBorrowTimeoutInput() *f64
```

- *Type:* *f64

---

##### `InitQueryInput`<sup>Optional</sup> <a name="InitQueryInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQueryInput"></a>

```go
func InitQueryInput() *string
```

- *Type:* *string

---

##### `MaxConnectionsPercentInput`<sup>Optional</sup> <a name="MaxConnectionsPercentInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercentInput"></a>

```go
func MaxConnectionsPercentInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsPercentInput`<sup>Optional</sup> <a name="MaxIdleConnectionsPercentInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercentInput"></a>

```go
func MaxIdleConnectionsPercentInput() *f64
```

- *Type:* *f64

---

##### `SessionPinningFiltersInput`<sup>Optional</sup> <a name="SessionPinningFiltersInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFiltersInput"></a>

```go
func SessionPinningFiltersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionBorrowTimeout`<sup>Required</sup> <a name="ConnectionBorrowTimeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeout"></a>

```go
func ConnectionBorrowTimeout() *f64
```

- *Type:* *f64

---

##### `InitQuery`<sup>Required</sup> <a name="InitQuery" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQuery"></a>

```go
func InitQuery() *string
```

- *Type:* *string

---

##### `MaxConnectionsPercent`<sup>Required</sup> <a name="MaxConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercent"></a>

```go
func MaxConnectionsPercent() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsPercent`<sup>Required</sup> <a name="MaxIdleConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercent"></a>

```go
func MaxIdleConnectionsPercent() *f64
```

- *Type:* *f64

---

##### `SessionPinningFilters`<sup>Required</sup> <a name="SessionPinningFilters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFilters"></a>

```go
func SessionPinningFilters() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DbProxyDefaultTargetGroupConnectionPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---


### DbProxyDefaultTargetGroupTimeoutsOutputReference <a name="DbProxyDefaultTargetGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dbproxydefaulttargetgroup"

dbproxydefaulttargetgroup.NewDbProxyDefaultTargetGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DbProxyDefaultTargetGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



