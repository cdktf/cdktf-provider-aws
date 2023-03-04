# `ec2NetworkInsightsPath` Submodule <a name="`ec2NetworkInsightsPath` Submodule" id="@cdktf/provider-aws.ec2NetworkInsightsPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsPath <a name="Ec2NetworkInsightsPath" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path aws_ec2_network_insights_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2networkinsightspath"

ec2networkinsightspath.NewEc2NetworkInsightsPath(scope Construct, id *string, config Ec2NetworkInsightsPathConfig) Ec2NetworkInsightsPath
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig">Ec2NetworkInsightsPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig">Ec2NetworkInsightsPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp">ResetDestinationIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDestinationIp` <a name="ResetDestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp"></a>

```go
func ResetDestinationIp()
```

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort"></a>

```go
func ResetDestinationPort()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp"></a>

```go
func ResetSourceIp()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2networkinsightspath"

ec2networkinsightspath.Ec2NetworkInsightsPath_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2networkinsightspath"

ec2networkinsightspath.Ec2NetworkInsightsPath_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2networkinsightspath"

ec2networkinsightspath.Ec2NetworkInsightsPath_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput">DestinationIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput">DestinationPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput">SourceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp">DestinationIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DestinationIpInput`<sup>Optional</sup> <a name="DestinationIpInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput"></a>

```go
func DestinationIpInput() *string
```

- *Type:* *string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput"></a>

```go
func DestinationPortInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput"></a>

```go
func SourceIpInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationIp`<sup>Required</sup> <a name="DestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp"></a>

```go
func DestinationIp() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsPathConfig <a name="Ec2NetworkInsightsPathConfig" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2networkinsightspath"

&ec2networkinsightspath.Ec2NetworkInsightsPathConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: *string,
	Protocol: *string,
	Source: *string,
	DestinationIp: *string,
	DestinationPort: *f64,
	Id: *string,
	SourceIp: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp">DestinationIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp">SourceIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}.

---

##### `DestinationIp`<sup>Optional</sup> <a name="DestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp"></a>

```go
DestinationIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort"></a>

```go
DestinationPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp"></a>

```go
SourceIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}.

---



