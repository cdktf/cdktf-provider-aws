# `serviceDiscoveryPrivateDnsNamespace` Submodule <a name="`serviceDiscoveryPrivateDnsNamespace` Submodule" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryPrivateDnsNamespace <a name="ServiceDiscoveryPrivateDnsNamespace" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace aws_service_discovery_private_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer"></a>

```typescript
import { serviceDiscoveryPrivateDnsNamespace } from '@cdktf/provider-aws'

new serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace(scope: Construct, id: string, config: ServiceDiscoveryPrivateDnsNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig">ServiceDiscoveryPrivateDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig">ServiceDiscoveryPrivateDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct"></a>

```typescript
import { serviceDiscoveryPrivateDnsNamespace } from '@cdktf/provider-aws'

serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement"></a>

```typescript
import { serviceDiscoveryPrivateDnsNamespace } from '@cdktf/provider-aws'

serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource"></a>

```typescript
import { serviceDiscoveryPrivateDnsNamespace } from '@cdktf/provider-aws'

serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.hostedZone">hostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.hostedZone"></a>

```typescript
public readonly hostedZone: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryPrivateDnsNamespaceConfig <a name="ServiceDiscoveryPrivateDnsNamespaceConfig" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.Initializer"></a>

```typescript
import { serviceDiscoveryPrivateDnsNamespace } from '@cdktf/provider-aws'

const serviceDiscoveryPrivateDnsNamespaceConfig: serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#name ServiceDiscoveryPrivateDnsNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.vpc">vpc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#description ServiceDiscoveryPrivateDnsNamespace#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#id ServiceDiscoveryPrivateDnsNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#tags ServiceDiscoveryPrivateDnsNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#name ServiceDiscoveryPrivateDnsNamespace#name}.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#description ServiceDiscoveryPrivateDnsNamespace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#id ServiceDiscoveryPrivateDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#tags ServiceDiscoveryPrivateDnsNamespace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}.

---



