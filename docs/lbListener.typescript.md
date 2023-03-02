# `lbListener` Submodule <a name="`lbListener` Submodule" id="@cdktf/provider-aws.lbListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListener <a name="LbListener" id="@cdktf/provider-aws.lbListener.LbListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener aws_lb_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListener.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListener(scope: Construct, id: string, config: LbListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig">LbListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerConfig">LbListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.putDefaultAction">putDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetAlpnPolicy">resetAlpnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lbListener.LbListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbListener.LbListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lbListener.LbListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lbListener.LbListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDefaultAction` <a name="putDefaultAction" id="@cdktf/provider-aws.lbListener.LbListener.putDefaultAction"></a>

```typescript
public putDefaultAction(value: IResolvable | LbListenerDefaultAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.putDefaultAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lbListener.LbListener.putTimeouts"></a>

```typescript
public putTimeouts(value: LbListenerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a>

---

##### `resetAlpnPolicy` <a name="resetAlpnPolicy" id="@cdktf/provider-aws.lbListener.LbListener.resetAlpnPolicy"></a>

```typescript
public resetAlpnPolicy(): void
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.lbListener.LbListener.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lbListener.LbListener.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbListener.LbListener.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbListener.LbListener.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-aws.lbListener.LbListener.resetSslPolicy"></a>

```typescript
public resetSslPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lbListener.LbListener.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lbListener.LbListener.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lbListener.LbListener.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lbListener.LbListener.isConstruct"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

lbListener.LbListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformElement"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

lbListener.LbListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformResource"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

lbListener.LbListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList">LbListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference">LbListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicyInput">alpnPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.defaultActionInput">defaultActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArnInput">loadBalancerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.sslPolicyInput">sslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicy">alpnPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbListener.LbListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lbListener.LbListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lbListener.LbListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbListener.LbListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbListener.LbListener.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbListener.LbListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbListener.LbListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbListener.LbListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListener.LbListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbListener.LbListener.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListener.LbListener.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.lbListener.LbListener.property.defaultAction"></a>

```typescript
public readonly defaultAction: LbListenerDefaultActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList">LbListenerDefaultActionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lbListener.LbListener.property.timeouts"></a>

```typescript
public readonly timeouts: LbListenerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference">LbListenerTimeoutsOutputReference</a>

---

##### `alpnPolicyInput`<sup>Optional</sup> <a name="alpnPolicyInput" id="@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicyInput"></a>

```typescript
public readonly alpnPolicyInput: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.lbListener.LbListener.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.lbListener.LbListener.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: IResolvable | LbListenerDefaultAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lbListener.LbListener.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerArnInput`<sup>Optional</sup> <a name="loadBalancerArnInput" id="@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArnInput"></a>

```typescript
public readonly loadBalancerArnInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbListener.LbListener.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbListener.LbListener.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-aws.lbListener.LbListener.property.sslPolicyInput"></a>

```typescript
public readonly sslPolicyInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lbListener.LbListener.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LbListenerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a> | cdktf.IResolvable

---

##### `alpnPolicy`<sup>Required</sup> <a name="alpnPolicy" id="@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicy"></a>

```typescript
public readonly alpnPolicy: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.lbListener.LbListener.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-aws.lbListener.LbListener.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lbListener.LbListener.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbListener.LbListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerConfig <a name="LbListenerConfig" id="@cdktf/provider-aws.lbListener.LbListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerConfig.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerConfig: lbListener.LbListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.defaultAction">defaultAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>[]</code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#load_balancer_arn LbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.alpnPolicy">alpnPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#alpn_policy LbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#certificate_arn LbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#id LbListener#id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#ssl_policy LbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags LbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags_all LbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: IResolvable | LbListenerDefaultAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>[]

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#default_action LbListener#default_action}

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#load_balancer_arn LbListener#load_balancer_arn}.

---

##### `alpnPolicy`<sup>Optional</sup> <a name="alpnPolicy" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.alpnPolicy"></a>

```typescript
public readonly alpnPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#alpn_policy LbListener#alpn_policy}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#certificate_arn LbListener#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#id LbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}.

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#ssl_policy LbListener#ssl_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags LbListener#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags_all LbListener#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LbListenerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#timeouts LbListener#timeouts}

---

### LbListenerDefaultAction <a name="LbListenerDefaultAction" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerDefaultAction: lbListener.LbListenerDefaultAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#type LbListener#type}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#order LbListener#order}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#target_group_arn LbListener#target_group_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#type LbListener#type}.

---

##### `authenticateCognito`<sup>Optional</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateCognito"></a>

```typescript
public readonly authenticateCognito: LbListenerDefaultActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authenticate_cognito LbListener#authenticate_cognito}

---

##### `authenticateOidc`<sup>Optional</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateOidc"></a>

```typescript
public readonly authenticateOidc: LbListenerDefaultActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authenticate_oidc LbListener#authenticate_oidc}

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: LbListenerDefaultActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#fixed_response LbListener#fixed_response}

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.forward"></a>

```typescript
public readonly forward: LbListenerDefaultActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#forward LbListener#forward}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#order LbListener#order}.

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.redirect"></a>

```typescript
public readonly redirect: LbListenerDefaultActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#redirect LbListener#redirect}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#target_group_arn LbListener#target_group_arn}.

---

### LbListenerDefaultActionAuthenticateCognito <a name="LbListenerDefaultActionAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerDefaultActionAuthenticateCognito: lbListener.LbListenerDefaultActionAuthenticateCognito = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_arn LbListener#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_client_id LbListener#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_domain LbListener#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#scope LbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_cookie_name LbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_timeout LbListener#session_timeout}. |

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_arn LbListener#user_pool_arn}.

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_client_id LbListener#user_pool_client_id}.

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_domain LbListener#user_pool_domain}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#scope LbListener#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_cookie_name LbListener#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_timeout LbListener#session_timeout}.

---

### LbListenerDefaultActionAuthenticateOidc <a name="LbListenerDefaultActionAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerDefaultActionAuthenticateOidc: lbListener.LbListenerDefaultActionAuthenticateOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authorization_endpoint LbListener#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#client_id LbListener#client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#client_secret LbListener#client_secret}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#issuer LbListener#issuer}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#token_endpoint LbListener#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_info_endpoint LbListener#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#scope LbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_cookie_name LbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_timeout LbListener#session_timeout}. |

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authorization_endpoint LbListener#authorization_endpoint}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#client_id LbListener#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#client_secret LbListener#client_secret}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#issuer LbListener#issuer}.

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#token_endpoint LbListener#token_endpoint}.

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_info_endpoint LbListener#user_info_endpoint}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#scope LbListener#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_cookie_name LbListener#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_timeout LbListener#session_timeout}.

---

### LbListenerDefaultActionFixedResponse <a name="LbListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerDefaultActionFixedResponse: lbListener.LbListenerDefaultActionFixedResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#content_type LbListener#content_type}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.messageBody">messageBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#message_body LbListener#message_body}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#status_code LbListener#status_code}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#content_type LbListener#content_type}.

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#message_body LbListener#message_body}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#status_code LbListener#status_code}.

---

### LbListenerDefaultActionForward <a name="LbListenerDefaultActionForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerDefaultActionForward: lbListener.LbListenerDefaultActionForward = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.targetGroup">targetGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>[]</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | stickiness block. |

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.targetGroup"></a>

```typescript
public readonly targetGroup: IResolvable | LbListenerDefaultActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>[]

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#target_group LbListener#target_group}

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.stickiness"></a>

```typescript
public readonly stickiness: LbListenerDefaultActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#stickiness LbListener#stickiness}

---

### LbListenerDefaultActionForwardStickiness <a name="LbListenerDefaultActionForwardStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerDefaultActionForwardStickiness: lbListener.LbListenerDefaultActionForwardStickiness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#duration LbListener#duration}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#enabled LbListener#enabled}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#duration LbListener#duration}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#enabled LbListener#enabled}.

---

### LbListenerDefaultActionForwardTargetGroup <a name="LbListenerDefaultActionForwardTargetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerDefaultActionForwardTargetGroup: lbListener.LbListenerDefaultActionForwardTargetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#arn LbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#weight LbListener#weight}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#arn LbListener#arn}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#weight LbListener#weight}.

---

### LbListenerDefaultActionRedirect <a name="LbListenerDefaultActionRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerDefaultActionRedirect: lbListener.LbListenerDefaultActionRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#status_code LbListener#status_code}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#host LbListener#host}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#path LbListener#path}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#query LbListener#query}. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#status_code LbListener#status_code}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#host LbListener#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#path LbListener#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#query LbListener#query}.

---

### LbListenerTimeouts <a name="LbListenerTimeouts" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

const lbListenerTimeouts: lbListener.LbListenerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#read LbListener#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#read LbListener#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerDefaultActionAuthenticateCognitoOutputReference <a name="LbListenerDefaultActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">userPoolClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```typescript
public readonly userPoolArnInput: string;
```

- *Type:* string

---

##### `userPoolClientIdInput`<sup>Optional</sup> <a name="userPoolClientIdInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```typescript
public readonly userPoolClientIdInput: string;
```

- *Type:* string

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```typescript
public readonly userPoolDomainInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerDefaultActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---


### LbListenerDefaultActionAuthenticateOidcOutputReference <a name="LbListenerDefaultActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```typescript
public readonly userInfoEndpointInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerDefaultActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---


### LbListenerDefaultActionFixedResponseOutputReference <a name="LbListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetMessageBody"></a>

```typescript
public resetMessageBody(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput"></a>

```typescript
public readonly messageBodyInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerDefaultActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---


### LbListenerDefaultActionForwardOutputReference <a name="LbListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionForwardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resetStickiness">resetStickiness</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStickiness` <a name="putStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness"></a>

```typescript
public putStickiness(value: LbListenerDefaultActionForwardStickiness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup"></a>

```typescript
public putTargetGroup(value: IResolvable | LbListenerDefaultActionForwardTargetGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>[]

---

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resetStickiness"></a>

```typescript
public resetStickiness(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference">LbListenerDefaultActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList">LbListenerDefaultActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickiness"></a>

```typescript
public readonly stickiness: LbListenerDefaultActionForwardStickinessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference">LbListenerDefaultActionForwardStickinessOutputReference</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroup"></a>

```typescript
public readonly targetGroup: LbListenerDefaultActionForwardTargetGroupList;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList">LbListenerDefaultActionForwardTargetGroupList</a>

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickinessInput"></a>

```typescript
public readonly stickinessInput: LbListenerDefaultActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroupInput"></a>

```typescript
public readonly targetGroupInput: IResolvable | LbListenerDefaultActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerDefaultActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---


### LbListenerDefaultActionForwardStickinessOutputReference <a name="LbListenerDefaultActionForwardStickinessOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionForwardStickinessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerDefaultActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---


### LbListenerDefaultActionForwardTargetGroupList <a name="LbListenerDefaultActionForwardTargetGroupList" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionForwardTargetGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get"></a>

```typescript
public get(index: number): LbListenerDefaultActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbListenerDefaultActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>[]

---


### LbListenerDefaultActionForwardTargetGroupOutputReference <a name="LbListenerDefaultActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerDefaultActionForwardTargetGroup | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a> | cdktf.IResolvable

---


### LbListenerDefaultActionList <a name="LbListenerDefaultActionList" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get"></a>

```typescript
public get(index: number): LbListenerDefaultActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbListenerDefaultAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>[]

---


### LbListenerDefaultActionOutputReference <a name="LbListenerDefaultActionOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito">putAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc">putAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateCognito">resetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateOidc">resetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetForward">resetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticateCognito` <a name="putAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito"></a>

```typescript
public putAuthenticateCognito(value: LbListenerDefaultActionAuthenticateCognito): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---

##### `putAuthenticateOidc` <a name="putAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc"></a>

```typescript
public putAuthenticateOidc(value: LbListenerDefaultActionAuthenticateOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse"></a>

```typescript
public putFixedResponse(value: LbListenerDefaultActionFixedResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---

##### `putForward` <a name="putForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward"></a>

```typescript
public putForward(value: LbListenerDefaultActionForward): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect"></a>

```typescript
public putRedirect(value: LbListenerDefaultActionRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---

##### `resetAuthenticateCognito` <a name="resetAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateCognito"></a>

```typescript
public resetAuthenticateCognito(): void
```

##### `resetAuthenticateOidc` <a name="resetAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateOidc"></a>

```typescript
public resetAuthenticateOidc(): void
```

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetFixedResponse"></a>

```typescript
public resetFixedResponse(): void
```

##### `resetForward` <a name="resetForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetForward"></a>

```typescript
public resetForward(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetRedirect"></a>

```typescript
public resetRedirect(): void
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference">LbListenerDefaultActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference">LbListenerDefaultActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference">LbListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference">LbListenerDefaultActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference">LbListenerDefaultActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognitoInput">authenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidcInput">authenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forwardInput">forwardInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticateCognito`<sup>Required</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognito"></a>

```typescript
public readonly authenticateCognito: LbListenerDefaultActionAuthenticateCognitoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference">LbListenerDefaultActionAuthenticateCognitoOutputReference</a>

---

##### `authenticateOidc`<sup>Required</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidc"></a>

```typescript
public readonly authenticateOidc: LbListenerDefaultActionAuthenticateOidcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference">LbListenerDefaultActionAuthenticateOidcOutputReference</a>

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: LbListenerDefaultActionFixedResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference">LbListenerDefaultActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forward"></a>

```typescript
public readonly forward: LbListenerDefaultActionForwardOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference">LbListenerDefaultActionForwardOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirect"></a>

```typescript
public readonly redirect: LbListenerDefaultActionRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference">LbListenerDefaultActionRedirectOutputReference</a>

---

##### `authenticateCognitoInput`<sup>Optional</sup> <a name="authenticateCognitoInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognitoInput"></a>

```typescript
public readonly authenticateCognitoInput: LbListenerDefaultActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---

##### `authenticateOidcInput`<sup>Optional</sup> <a name="authenticateOidcInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidcInput"></a>

```typescript
public readonly authenticateOidcInput: LbListenerDefaultActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```typescript
public readonly fixedResponseInput: LbListenerDefaultActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forwardInput"></a>

```typescript
public readonly forwardInput: LbListenerDefaultActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirectInput"></a>

```typescript
public readonly redirectInput: LbListenerDefaultActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerDefaultAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a> | cdktf.IResolvable

---


### LbListenerDefaultActionRedirectOutputReference <a name="LbListenerDefaultActionRedirectOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerDefaultActionRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerDefaultActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---


### LbListenerTimeoutsOutputReference <a name="LbListenerTimeoutsOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer"></a>

```typescript
import { lbListener } from '@cdktf/provider-aws'

new lbListener.LbListenerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a> | cdktf.IResolvable

---



