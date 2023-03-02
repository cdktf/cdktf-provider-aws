# `vpcPeeringConnectionAccepter` Submodule <a name="`vpcPeeringConnectionAccepter` Submodule" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnectionAccepterA <a name="VpcPeeringConnectionAccepterA" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

new vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig">VpcPeeringConnectionAccepterAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig">VpcPeeringConnectionAccepterAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter">putAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester">putRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAccepter">resetAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAutoAccept">resetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRequester">resetRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccepter` <a name="putAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter"></a>

```typescript
public putAccepter(value: VpcPeeringConnectionAccepterAccepter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---

##### `putRequester` <a name="putRequester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester"></a>

```typescript
public putRequester(value: VpcPeeringConnectionAccepterRequester): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcPeeringConnectionAccepterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>

---

##### `resetAccepter` <a name="resetAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAccepter"></a>

```typescript
public resetAccepter(): void
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAutoAccept"></a>

```typescript
public resetAutoAccept(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequester` <a name="resetRequester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRequester"></a>

```typescript
public resetRequester(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference">VpcPeeringConnectionAccepterAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.acceptStatus">acceptStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerOwnerId">peerOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerVpcId">peerVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference">VpcPeeringConnectionAccepterRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference">VpcPeeringConnectionAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepterInput">accepterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAcceptInput">autoAcceptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requesterInput">requesterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accepter`<sup>Required</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepter"></a>

```typescript
public readonly accepter: VpcPeeringConnectionAccepterAccepterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference">VpcPeeringConnectionAccepterAccepterOutputReference</a>

---

##### `acceptStatus`<sup>Required</sup> <a name="acceptStatus" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.acceptStatus"></a>

```typescript
public readonly acceptStatus: string;
```

- *Type:* string

---

##### `peerOwnerId`<sup>Required</sup> <a name="peerOwnerId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerOwnerId"></a>

```typescript
public readonly peerOwnerId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerVpcId"></a>

```typescript
public readonly peerVpcId: string;
```

- *Type:* string

---

##### `requester`<sup>Required</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requester"></a>

```typescript
public readonly requester: VpcPeeringConnectionAccepterRequesterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference">VpcPeeringConnectionAccepterRequesterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeouts"></a>

```typescript
public readonly timeouts: VpcPeeringConnectionAccepterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference">VpcPeeringConnectionAccepterTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `accepterInput`<sup>Optional</sup> <a name="accepterInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepterInput"></a>

```typescript
public readonly accepterInput: VpcPeeringConnectionAccepterAccepter;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAcceptInput"></a>

```typescript
public readonly autoAcceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `requesterInput`<sup>Optional</sup> <a name="requesterInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requesterInput"></a>

```typescript
public readonly requesterInput: VpcPeeringConnectionAccepterRequester;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VpcPeeringConnectionAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a> | cdktf.IResolvable

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionIdInput"></a>

```typescript
public readonly vpcPeeringConnectionIdInput: string;
```

- *Type:* string

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepterAccepter <a name="VpcPeeringConnectionAccepterAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

const vpcPeeringConnectionAccepterAccepter: vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}. |

---

##### `allowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.

---

##### `allowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

##### `allowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionAccepterAConfig <a name="VpcPeeringConnectionAccepterAConfig" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

const vpcPeeringConnectionAccepterAConfig: vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | requester block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.accepter"></a>

```typescript
public readonly accepter: VpcPeeringConnectionAccepterAccepter;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#accepter VpcPeeringConnectionAccepterA#accepter}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.requester"></a>

```typescript
public readonly requester: VpcPeeringConnectionAccepterRequester;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#requester VpcPeeringConnectionAccepterA#requester}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcPeeringConnectionAccepterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#timeouts VpcPeeringConnectionAccepterA#timeouts}

---

### VpcPeeringConnectionAccepterRequester <a name="VpcPeeringConnectionAccepterRequester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

const vpcPeeringConnectionAccepterRequester: vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}. |

---

##### `allowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.

---

##### `allowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

##### `allowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionAccepterTimeouts <a name="VpcPeeringConnectionAccepterTimeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

const vpcPeeringConnectionAccepterTimeouts: vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterAccepterOutputReference <a name="VpcPeeringConnectionAccepterAccepterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

new vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">resetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowRemoteVpcDnsResolution">resetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowVpcToRemoteClassicLink">resetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowClassicLinkToRemoteVpc` <a name="resetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```typescript
public resetAllowClassicLinkToRemoteVpc(): void
```

##### `resetAllowRemoteVpcDnsResolution` <a name="resetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```typescript
public resetAllowRemoteVpcDnsResolution(): void
```

##### `resetAllowVpcToRemoteClassicLink` <a name="resetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```typescript
public resetAllowVpcToRemoteClassicLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">allowClassicLinkToRemoteVpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">allowRemoteVpcDnsResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">allowVpcToRemoteClassicLinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```typescript
public readonly allowClassicLinkToRemoteVpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```typescript
public readonly allowRemoteVpcDnsResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```typescript
public readonly allowVpcToRemoteClassicLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolution`<sup>Required</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLink`<sup>Required</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcPeeringConnectionAccepterAccepter;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---


### VpcPeeringConnectionAccepterRequesterOutputReference <a name="VpcPeeringConnectionAccepterRequesterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

new vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">resetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowRemoteVpcDnsResolution">resetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowVpcToRemoteClassicLink">resetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowClassicLinkToRemoteVpc` <a name="resetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```typescript
public resetAllowClassicLinkToRemoteVpc(): void
```

##### `resetAllowRemoteVpcDnsResolution` <a name="resetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```typescript
public resetAllowRemoteVpcDnsResolution(): void
```

##### `resetAllowVpcToRemoteClassicLink` <a name="resetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```typescript
public resetAllowVpcToRemoteClassicLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">allowClassicLinkToRemoteVpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">allowRemoteVpcDnsResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">allowVpcToRemoteClassicLinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```typescript
public readonly allowClassicLinkToRemoteVpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```typescript
public readonly allowRemoteVpcDnsResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```typescript
public readonly allowVpcToRemoteClassicLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolution`<sup>Required</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLink`<sup>Required</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcPeeringConnectionAccepterRequester;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---


### VpcPeeringConnectionAccepterTimeoutsOutputReference <a name="VpcPeeringConnectionAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepter } from '@cdktf/provider-aws'

new vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcPeeringConnectionAccepterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a> | cdktf.IResolvable

---



