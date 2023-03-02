# `sesv2DedicatedIpPool` Submodule <a name="`sesv2DedicatedIpPool` Submodule" id="@cdktf/provider-aws.sesv2DedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2DedicatedIpPool <a name="Sesv2DedicatedIpPool" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer"></a>

```typescript
import { sesv2DedicatedIpPool } from '@cdktf/provider-aws'

new sesv2DedicatedIpPool.Sesv2DedicatedIpPool(scope: Construct, id: string, config: Sesv2DedicatedIpPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig">Sesv2DedicatedIpPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig">Sesv2DedicatedIpPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode">resetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts"></a>

```typescript
public putTimeouts(value: Sesv2DedicatedIpPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScalingMode` <a name="resetScalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode"></a>

```typescript
public resetScalingMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct"></a>

```typescript
import { sesv2DedicatedIpPool } from '@cdktf/provider-aws'

sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement"></a>

```typescript
import { sesv2DedicatedIpPool } from '@cdktf/provider-aws'

sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource"></a>

```typescript
import { sesv2DedicatedIpPool } from '@cdktf/provider-aws'

sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference">Sesv2DedicatedIpPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput">poolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput">scalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName">poolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode">scalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeouts"></a>

```typescript
public readonly timeouts: Sesv2DedicatedIpPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference">Sesv2DedicatedIpPoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput"></a>

```typescript
public readonly poolNameInput: string;
```

- *Type:* string

---

##### `scalingModeInput`<sup>Optional</sup> <a name="scalingModeInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput"></a>

```typescript
public readonly scalingModeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Sesv2DedicatedIpPoolTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode"></a>

```typescript
public readonly scalingMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2DedicatedIpPoolConfig <a name="Sesv2DedicatedIpPoolConfig" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.Initializer"></a>

```typescript
import { sesv2DedicatedIpPool } from '@cdktf/provider-aws'

const sesv2DedicatedIpPoolConfig: sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName">poolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode">scalingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scalingMode`<sup>Optional</sup> <a name="scalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode"></a>

```typescript
public readonly scalingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Sesv2DedicatedIpPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#timeouts Sesv2DedicatedIpPool#timeouts}

---

### Sesv2DedicatedIpPoolTimeouts <a name="Sesv2DedicatedIpPoolTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.Initializer"></a>

```typescript
import { sesv2DedicatedIpPool } from '@cdktf/provider-aws'

const sesv2DedicatedIpPoolTimeouts: sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#create Sesv2DedicatedIpPool#create}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#delete Sesv2DedicatedIpPool#delete}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#update Sesv2DedicatedIpPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#create Sesv2DedicatedIpPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#delete Sesv2DedicatedIpPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#update Sesv2DedicatedIpPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2DedicatedIpPoolTimeoutsOutputReference <a name="Sesv2DedicatedIpPoolTimeoutsOutputReference" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { sesv2DedicatedIpPool } from '@cdktf/provider-aws'

new sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Sesv2DedicatedIpPoolTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a> | cdktf.IResolvable

---



