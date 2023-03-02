# `ec2TrafficMirrorTarget` Submodule <a name="`ec2TrafficMirrorTarget` Submodule" id="@cdktf/provider-aws.ec2TrafficMirrorTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorTarget <a name="Ec2TrafficMirrorTarget" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target aws_ec2_traffic_mirror_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktf/provider-aws'

new ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget(scope: Construct, id: string, config?: Ec2TrafficMirrorTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig">Ec2TrafficMirrorTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig">Ec2TrafficMirrorTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetGatewayLoadBalancerEndpointId">resetGatewayLoadBalancerEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkLoadBalancerArn">resetNetworkLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGatewayLoadBalancerEndpointId` <a name="resetGatewayLoadBalancerEndpointId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetGatewayLoadBalancerEndpointId"></a>

```typescript
public resetGatewayLoadBalancerEndpointId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetNetworkLoadBalancerArn` <a name="resetNetworkLoadBalancerArn" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkLoadBalancerArn"></a>

```typescript
public resetNetworkLoadBalancerArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktf/provider-aws'

ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktf/provider-aws'

ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktf/provider-aws'

ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointIdInput">gatewayLoadBalancerEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArnInput">networkLoadBalancerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointId">gatewayLoadBalancerEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArn">networkLoadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewayLoadBalancerEndpointIdInput`<sup>Optional</sup> <a name="gatewayLoadBalancerEndpointIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointIdInput"></a>

```typescript
public readonly gatewayLoadBalancerEndpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `networkLoadBalancerArnInput`<sup>Optional</sup> <a name="networkLoadBalancerArnInput" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArnInput"></a>

```typescript
public readonly networkLoadBalancerArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gatewayLoadBalancerEndpointId`<sup>Required</sup> <a name="gatewayLoadBalancerEndpointId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointId"></a>

```typescript
public readonly gatewayLoadBalancerEndpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `networkLoadBalancerArn`<sup>Required</sup> <a name="networkLoadBalancerArn" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArn"></a>

```typescript
public readonly networkLoadBalancerArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorTargetConfig <a name="Ec2TrafficMirrorTargetConfig" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.Initializer"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktf/provider-aws'

const ec2TrafficMirrorTargetConfig: ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.gatewayLoadBalancerEndpointId">gatewayLoadBalancerEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#id Ec2TrafficMirrorTarget#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkLoadBalancerArn">networkLoadBalancerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#tags_all Ec2TrafficMirrorTarget#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}.

---

##### `gatewayLoadBalancerEndpointId`<sup>Optional</sup> <a name="gatewayLoadBalancerEndpointId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.gatewayLoadBalancerEndpointId"></a>

```typescript
public readonly gatewayLoadBalancerEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#id Ec2TrafficMirrorTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}.

---

##### `networkLoadBalancerArn`<sup>Optional</sup> <a name="networkLoadBalancerArn" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkLoadBalancerArn"></a>

```typescript
public readonly networkLoadBalancerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target#tags_all Ec2TrafficMirrorTarget#tags_all}.

---



