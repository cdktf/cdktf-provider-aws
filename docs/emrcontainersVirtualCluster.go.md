# `emrcontainersVirtualCluster` Submodule <a name="`emrcontainersVirtualCluster` Submodule" id="@cdktf/provider-aws.emrcontainersVirtualCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrcontainersVirtualCluster <a name="EmrcontainersVirtualCluster" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

emrcontainersvirtualcluster.NewEmrcontainersVirtualCluster(scope Construct, id *string, config EmrcontainersVirtualClusterConfig) EmrcontainersVirtualCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig">EmrcontainersVirtualClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig">EmrcontainersVirtualClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider">PutContainerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutContainerProvider` <a name="PutContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider"></a>

```go
func PutContainerProvider(value EmrcontainersVirtualClusterContainerProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts"></a>

```go
func PutTimeouts(value EmrcontainersVirtualClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

emrcontainersvirtualcluster.EmrcontainersVirtualCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

emrcontainersvirtualcluster.EmrcontainersVirtualCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

emrcontainersvirtualcluster.EmrcontainersVirtualCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProvider">ContainerProvider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference">EmrcontainersVirtualClusterContainerProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference">EmrcontainersVirtualClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProviderInput">ContainerProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ContainerProvider`<sup>Required</sup> <a name="ContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProvider"></a>

```go
func ContainerProvider() EmrcontainersVirtualClusterContainerProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference">EmrcontainersVirtualClusterContainerProviderOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeouts"></a>

```go
func Timeouts() EmrcontainersVirtualClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference">EmrcontainersVirtualClusterTimeoutsOutputReference</a>

---

##### `ContainerProviderInput`<sup>Optional</sup> <a name="ContainerProviderInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProviderInput"></a>

```go
func ContainerProviderInput() EmrcontainersVirtualClusterContainerProvider
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrcontainersVirtualClusterConfig <a name="EmrcontainersVirtualClusterConfig" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

&emrcontainersvirtualcluster.EmrcontainersVirtualClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerProvider: github.com/cdktf/cdktf-provider-aws-go/aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider,
	Name: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.containerProvider">ContainerProvider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | container_provider block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerProvider`<sup>Required</sup> <a name="ContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.containerProvider"></a>

```go
ContainerProvider EmrcontainersVirtualClusterContainerProvider
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

container_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#container_provider EmrcontainersVirtualCluster#container_provider}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.timeouts"></a>

```go
Timeouts EmrcontainersVirtualClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#timeouts EmrcontainersVirtualCluster#timeouts}

---

### EmrcontainersVirtualClusterContainerProvider <a name="EmrcontainersVirtualClusterContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

&emrcontainersvirtualcluster.EmrcontainersVirtualClusterContainerProvider {
	Id: *string,
	Info: github.com/cdktf/cdktf-provider-aws-go/aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.info">Info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | info block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.info"></a>

```go
Info EmrcontainersVirtualClusterContainerProviderInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#info EmrcontainersVirtualCluster#info}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}.

---

### EmrcontainersVirtualClusterContainerProviderInfo <a name="EmrcontainersVirtualClusterContainerProviderInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

&emrcontainersvirtualcluster.EmrcontainersVirtualClusterContainerProviderInfo {
	EksInfo: github.com/cdktf/cdktf-provider-aws-go/aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.property.eksInfo">EksInfo</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | eks_info block. |

---

##### `EksInfo`<sup>Required</sup> <a name="EksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.property.eksInfo"></a>

```go
EksInfo EmrcontainersVirtualClusterContainerProviderInfoEksInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

eks_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#eks_info EmrcontainersVirtualCluster#eks_info}

---

### EmrcontainersVirtualClusterContainerProviderInfoEksInfo <a name="EmrcontainersVirtualClusterContainerProviderInfoEksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

&emrcontainersvirtualcluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo {
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}.

---

### EmrcontainersVirtualClusterTimeouts <a name="EmrcontainersVirtualClusterTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

&emrcontainersvirtualcluster.EmrcontainersVirtualClusterTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference <a name="EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

emrcontainersvirtualcluster.NewEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersVirtualClusterContainerProviderInfoEksInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


### EmrcontainersVirtualClusterContainerProviderInfoOutputReference <a name="EmrcontainersVirtualClusterContainerProviderInfoOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

emrcontainersvirtualcluster.NewEmrcontainersVirtualClusterContainerProviderInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersVirtualClusterContainerProviderInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo">PutEksInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEksInfo` <a name="PutEksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo"></a>

```go
func PutEksInfo(value EmrcontainersVirtualClusterContainerProviderInfoEksInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo">EksInfo</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfoInput">EksInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EksInfo`<sup>Required</sup> <a name="EksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo"></a>

```go
func EksInfo() EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference</a>

---

##### `EksInfoInput`<sup>Optional</sup> <a name="EksInfoInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfoInput"></a>

```go
func EksInfoInput() EmrcontainersVirtualClusterContainerProviderInfoEksInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersVirtualClusterContainerProviderInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---


### EmrcontainersVirtualClusterContainerProviderOutputReference <a name="EmrcontainersVirtualClusterContainerProviderOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

emrcontainersvirtualcluster.NewEmrcontainersVirtualClusterContainerProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersVirtualClusterContainerProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo">PutInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfo` <a name="PutInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo"></a>

```go
func PutInfo(value EmrcontainersVirtualClusterContainerProviderInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.info">Info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.infoInput">InfoInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.info"></a>

```go
func Info() EmrcontainersVirtualClusterContainerProviderInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InfoInput`<sup>Optional</sup> <a name="InfoInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.infoInput"></a>

```go
func InfoInput() EmrcontainersVirtualClusterContainerProviderInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersVirtualClusterContainerProvider
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---


### EmrcontainersVirtualClusterTimeoutsOutputReference <a name="EmrcontainersVirtualClusterTimeoutsOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrcontainersvirtualcluster"

emrcontainersvirtualcluster.NewEmrcontainersVirtualClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersVirtualClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



