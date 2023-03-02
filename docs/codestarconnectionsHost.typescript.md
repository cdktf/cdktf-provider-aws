# `codestarconnectionsHost` Submodule <a name="`codestarconnectionsHost` Submodule" id="@cdktf/provider-aws.codestarconnectionsHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsHost <a name="CodestarconnectionsHost" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host aws_codestarconnections_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

new codestarconnectionsHost.CodestarconnectionsHost(scope: Construct, id: string, config: CodestarconnectionsHostConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig">CodestarconnectionsHostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig">CodestarconnectionsHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts"></a>

```typescript
public putTimeouts(value: CodestarconnectionsHostTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: CodestarconnectionsHostVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.resetVpcConfiguration"></a>

```typescript
public resetVpcConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

codestarconnectionsHost.CodestarconnectionsHost.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference">CodestarconnectionsHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference">CodestarconnectionsHostVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpointInput">providerEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerTypeInput">providerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpoint">providerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeouts"></a>

```typescript
public readonly timeouts: CodestarconnectionsHostTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference">CodestarconnectionsHostTimeoutsOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: CodestarconnectionsHostVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference">CodestarconnectionsHostVpcConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerEndpointInput`<sup>Optional</sup> <a name="providerEndpointInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpointInput"></a>

```typescript
public readonly providerEndpointInput: string;
```

- *Type:* string

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerTypeInput"></a>

```typescript
public readonly providerTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CodestarconnectionsHostTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a> | cdktf.IResolvable

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: CodestarconnectionsHostVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerEndpoint"></a>

```typescript
public readonly providerEndpoint: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHost.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsHostConfig <a name="CodestarconnectionsHostConfig" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.Initializer"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

const codestarconnectionsHostConfig: codestarconnectionsHost.CodestarconnectionsHostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#name CodestarconnectionsHost#name}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerEndpoint">providerEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerType">providerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#id CodestarconnectionsHost#id}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#name CodestarconnectionsHost#name}.

---

##### `providerEndpoint`<sup>Required</sup> <a name="providerEndpoint" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerEndpoint"></a>

```typescript
public readonly providerEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}.

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#id CodestarconnectionsHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CodestarconnectionsHostTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#timeouts CodestarconnectionsHost#timeouts}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: CodestarconnectionsHostVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#vpc_configuration CodestarconnectionsHost#vpc_configuration}

---

### CodestarconnectionsHostTimeouts <a name="CodestarconnectionsHostTimeouts" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.Initializer"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

const codestarconnectionsHostTimeouts: codestarconnectionsHost.CodestarconnectionsHostTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#create CodestarconnectionsHost#create}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#delete CodestarconnectionsHost#delete}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#update CodestarconnectionsHost#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#create CodestarconnectionsHost#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#delete CodestarconnectionsHost#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#update CodestarconnectionsHost#update}.

---

### CodestarconnectionsHostVpcConfiguration <a name="CodestarconnectionsHostVpcConfiguration" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.Initializer"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

const codestarconnectionsHostVpcConfiguration: codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.tlsCertificate">tlsCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}.

---

##### `tlsCertificate`<sup>Optional</sup> <a name="tlsCertificate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration.property.tlsCertificate"></a>

```typescript
public readonly tlsCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarconnectionsHostTimeoutsOutputReference <a name="CodestarconnectionsHostTimeoutsOutputReference" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

new codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodestarconnectionsHostTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostTimeouts">CodestarconnectionsHostTimeouts</a> | cdktf.IResolvable

---


### CodestarconnectionsHostVpcConfigurationOutputReference <a name="CodestarconnectionsHostVpcConfigurationOutputReference" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { codestarconnectionsHost } from '@cdktf/provider-aws'

new codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate">resetTlsCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTlsCertificate` <a name="resetTlsCertificate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate"></a>

```typescript
public resetTlsCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput">tlsCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate">tlsCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tlsCertificateInput`<sup>Optional</sup> <a name="tlsCertificateInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput"></a>

```typescript
public readonly tlsCertificateInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate"></a>

```typescript
public readonly tlsCertificate: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodestarconnectionsHostVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsHost.CodestarconnectionsHostVpcConfiguration">CodestarconnectionsHostVpcConfiguration</a>

---



