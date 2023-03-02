# `globalacceleratorAccelerator` Submodule <a name="`globalacceleratorAccelerator` Submodule" id="@cdktf/provider-aws.globalacceleratorAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorAccelerator <a name="GlobalacceleratorAccelerator" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator aws_globalaccelerator_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

new globalacceleratorAccelerator.GlobalacceleratorAccelerator(scope: Construct, id: string, config: GlobalacceleratorAcceleratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig">GlobalacceleratorAcceleratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig">GlobalacceleratorAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes"></a>

```typescript
public putAttributes(value: GlobalacceleratorAcceleratorAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts"></a>

```typescript
public putTimeouts(value: GlobalacceleratorAcceleratorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses"></a>

```typescript
public resetIpAddresses(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference">GlobalacceleratorAcceleratorAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipSets">ipSets</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList">GlobalacceleratorAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference">GlobalacceleratorAcceleratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributesInput">attributesInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput">ipAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributes"></a>

```typescript
public readonly attributes: GlobalacceleratorAcceleratorAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference">GlobalacceleratorAcceleratorAttributesOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `ipSets`<sup>Required</sup> <a name="ipSets" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipSets"></a>

```typescript
public readonly ipSets: GlobalacceleratorAcceleratorIpSetsList;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList">GlobalacceleratorAcceleratorIpSetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalacceleratorAcceleratorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference">GlobalacceleratorAcceleratorTimeoutsOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributesInput"></a>

```typescript
public readonly attributesInput: GlobalacceleratorAcceleratorAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: string[];
```

- *Type:* string[]

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GlobalacceleratorAcceleratorTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a> | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorAcceleratorAttributes <a name="GlobalacceleratorAcceleratorAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

const globalacceleratorAcceleratorAttributes: globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsEnabled">flowLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}. |

---

##### `flowLogsEnabled`<sup>Optional</sup> <a name="flowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsEnabled"></a>

```typescript
public readonly flowLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}.

---

##### `flowLogsS3Bucket`<sup>Optional</sup> <a name="flowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Bucket"></a>

```typescript
public readonly flowLogsS3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}.

---

##### `flowLogsS3Prefix`<sup>Optional</sup> <a name="flowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Prefix"></a>

```typescript
public readonly flowLogsS3Prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}.

---

### GlobalacceleratorAcceleratorConfig <a name="GlobalacceleratorAcceleratorConfig" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

const globalacceleratorAcceleratorConfig: globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#id GlobalacceleratorAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags_all GlobalacceleratorAccelerator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.attributes"></a>

```typescript
public readonly attributes: GlobalacceleratorAcceleratorAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#attributes GlobalacceleratorAccelerator#attributes}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#id GlobalacceleratorAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags_all GlobalacceleratorAccelerator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalacceleratorAcceleratorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#timeouts GlobalacceleratorAccelerator#timeouts}

---

### GlobalacceleratorAcceleratorIpSets <a name="GlobalacceleratorAcceleratorIpSets" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

const globalacceleratorAcceleratorIpSets: globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets = { ... }
```


### GlobalacceleratorAcceleratorTimeouts <a name="GlobalacceleratorAcceleratorTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

const globalacceleratorAcceleratorTimeouts: globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#create GlobalacceleratorAccelerator#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#update GlobalacceleratorAccelerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#create GlobalacceleratorAccelerator#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#update GlobalacceleratorAccelerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorAcceleratorAttributesOutputReference <a name="GlobalacceleratorAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

new globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsEnabled">resetFlowLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket">resetFlowLogsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix">resetFlowLogsS3Prefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowLogsEnabled` <a name="resetFlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsEnabled"></a>

```typescript
public resetFlowLogsEnabled(): void
```

##### `resetFlowLogsS3Bucket` <a name="resetFlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket"></a>

```typescript
public resetFlowLogsS3Bucket(): void
```

##### `resetFlowLogsS3Prefix` <a name="resetFlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix"></a>

```typescript
public resetFlowLogsS3Prefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabledInput">flowLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput">flowLogsS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput">flowLogsS3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled">flowLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowLogsEnabledInput`<sup>Optional</sup> <a name="flowLogsEnabledInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabledInput"></a>

```typescript
public readonly flowLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flowLogsS3BucketInput`<sup>Optional</sup> <a name="flowLogsS3BucketInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput"></a>

```typescript
public readonly flowLogsS3BucketInput: string;
```

- *Type:* string

---

##### `flowLogsS3PrefixInput`<sup>Optional</sup> <a name="flowLogsS3PrefixInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput"></a>

```typescript
public readonly flowLogsS3PrefixInput: string;
```

- *Type:* string

---

##### `flowLogsEnabled`<sup>Required</sup> <a name="flowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```typescript
public readonly flowLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flowLogsS3Bucket`<sup>Required</sup> <a name="flowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```typescript
public readonly flowLogsS3Bucket: string;
```

- *Type:* string

---

##### `flowLogsS3Prefix`<sup>Required</sup> <a name="flowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```typescript
public readonly flowLogsS3Prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlobalacceleratorAcceleratorAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---


### GlobalacceleratorAcceleratorIpSetsList <a name="GlobalacceleratorAcceleratorIpSetsList" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

new globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get"></a>

```typescript
public get(index: number): GlobalacceleratorAcceleratorIpSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GlobalacceleratorAcceleratorIpSetsOutputReference <a name="GlobalacceleratorAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

new globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily">ipFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets">GlobalacceleratorAcceleratorIpSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `ipFamily`<sup>Required</sup> <a name="ipFamily" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```typescript
public readonly ipFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlobalacceleratorAcceleratorIpSets;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets">GlobalacceleratorAcceleratorIpSets</a>

---


### GlobalacceleratorAcceleratorTimeoutsOutputReference <a name="GlobalacceleratorAcceleratorTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer"></a>

```typescript
import { globalacceleratorAccelerator } from '@cdktf/provider-aws'

new globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlobalacceleratorAcceleratorTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a> | cdktf.IResolvable

---



