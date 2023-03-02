# `sesv2DedicatedIpPool` Submodule <a name="`sesv2DedicatedIpPool` Submodule" id="@cdktf/provider-aws.sesv2DedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2DedicatedIpPool <a name="Sesv2DedicatedIpPool" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2dedicatedippool"

sesv2dedicatedippool.NewSesv2DedicatedIpPool(scope Construct, id *string, config Sesv2DedicatedIpPoolConfig) Sesv2DedicatedIpPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig">Sesv2DedicatedIpPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig">Sesv2DedicatedIpPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode">ResetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts"></a>

```go
func PutTimeouts(value Sesv2DedicatedIpPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId"></a>

```go
func ResetId()
```

##### `ResetScalingMode` <a name="ResetScalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode"></a>

```go
func ResetScalingMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2dedicatedippool"

sesv2dedicatedippool.Sesv2DedicatedIpPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2dedicatedippool"

sesv2dedicatedippool.Sesv2DedicatedIpPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2dedicatedippool"

sesv2dedicatedippool.Sesv2DedicatedIpPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference">Sesv2DedicatedIpPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput">PoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput">ScalingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName">PoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode">ScalingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeouts"></a>

```go
func Timeouts() Sesv2DedicatedIpPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference">Sesv2DedicatedIpPoolTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput"></a>

```go
func PoolNameInput() *string
```

- *Type:* *string

---

##### `ScalingModeInput`<sup>Optional</sup> <a name="ScalingModeInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput"></a>

```go
func ScalingModeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName"></a>

```go
func PoolName() *string
```

- *Type:* *string

---

##### `ScalingMode`<sup>Required</sup> <a name="ScalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode"></a>

```go
func ScalingMode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2DedicatedIpPoolConfig <a name="Sesv2DedicatedIpPoolConfig" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2dedicatedippool"

&sesv2dedicatedippool.Sesv2DedicatedIpPoolConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PoolName: *string,
	Id: *string,
	ScalingMode: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName">PoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode">ScalingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName"></a>

```go
PoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScalingMode`<sup>Optional</sup> <a name="ScalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode"></a>

```go
ScalingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.timeouts"></a>

```go
Timeouts Sesv2DedicatedIpPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#timeouts Sesv2DedicatedIpPool#timeouts}

---

### Sesv2DedicatedIpPoolTimeouts <a name="Sesv2DedicatedIpPoolTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2dedicatedippool"

&sesv2dedicatedippool.Sesv2DedicatedIpPoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#create Sesv2DedicatedIpPool#create}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#delete Sesv2DedicatedIpPool#delete}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#update Sesv2DedicatedIpPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#create Sesv2DedicatedIpPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#delete Sesv2DedicatedIpPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#update Sesv2DedicatedIpPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2DedicatedIpPoolTimeoutsOutputReference <a name="Sesv2DedicatedIpPoolTimeoutsOutputReference" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2dedicatedippool"

sesv2dedicatedippool.NewSesv2DedicatedIpPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Sesv2DedicatedIpPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



