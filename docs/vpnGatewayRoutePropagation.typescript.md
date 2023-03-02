# `vpnGatewayRoutePropagation` Submodule <a name="`vpnGatewayRoutePropagation` Submodule" id="@cdktf/provider-aws.vpnGatewayRoutePropagation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayRoutePropagation <a name="VpnGatewayRoutePropagation" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation aws_vpn_gateway_route_propagation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer"></a>

```typescript
import { vpnGatewayRoutePropagation } from '@cdktf/provider-aws'

new vpnGatewayRoutePropagation.VpnGatewayRoutePropagation(scope: Construct, id: string, config: VpnGatewayRoutePropagationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig">VpnGatewayRoutePropagationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig">VpnGatewayRoutePropagationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnGatewayRoutePropagationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isConstruct"></a>

```typescript
import { vpnGatewayRoutePropagation } from '@cdktf/provider-aws'

vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformElement"></a>

```typescript
import { vpnGatewayRoutePropagation } from '@cdktf/provider-aws'

vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformResource"></a>

```typescript
import { vpnGatewayRoutePropagation } from '@cdktf/provider-aws'

vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference">VpnGatewayRoutePropagationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.routeTableIdInput">routeTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.timeouts"></a>

```typescript
public readonly timeouts: VpnGatewayRoutePropagationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference">VpnGatewayRoutePropagationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `routeTableIdInput`<sup>Optional</sup> <a name="routeTableIdInput" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.routeTableIdInput"></a>

```typescript
public readonly routeTableIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VpnGatewayRoutePropagationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a> | cdktf.IResolvable

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.vpnGatewayIdInput"></a>

```typescript
public readonly vpnGatewayIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayRoutePropagationConfig <a name="VpnGatewayRoutePropagationConfig" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.Initializer"></a>

```typescript
import { vpnGatewayRoutePropagation } from '@cdktf/provider-aws'

const vpnGatewayRoutePropagationConfig: vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.routeTableId">routeTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#route_table_id VpnGatewayRoutePropagation#route_table_id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#id VpnGatewayRoutePropagation#id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#route_table_id VpnGatewayRoutePropagation#route_table_id}.

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#id VpnGatewayRoutePropagation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpnGatewayRoutePropagationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#timeouts VpnGatewayRoutePropagation#timeouts}

---

### VpnGatewayRoutePropagationTimeouts <a name="VpnGatewayRoutePropagationTimeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.Initializer"></a>

```typescript
import { vpnGatewayRoutePropagation } from '@cdktf/provider-aws'

const vpnGatewayRoutePropagationTimeouts: vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#create VpnGatewayRoutePropagation#create}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#delete VpnGatewayRoutePropagation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#create VpnGatewayRoutePropagation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#delete VpnGatewayRoutePropagation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayRoutePropagationTimeoutsOutputReference <a name="VpnGatewayRoutePropagationTimeoutsOutputReference" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnGatewayRoutePropagation } from '@cdktf/provider-aws'

new vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnGatewayRoutePropagationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a> | cdktf.IResolvable

---



