# `elasticsearchDomainSamlOptions` Submodule <a name="`elasticsearchDomainSamlOptions` Submodule" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchDomainSamlOptions <a name="ElasticsearchDomainSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options aws_elasticsearch_domain_saml_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

new elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions(scope: Construct, id: string, config: ElasticsearchDomainSamlOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig">ElasticsearchDomainSamlOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig">ElasticsearchDomainSamlOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions">putSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetSamlOptions">resetSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSamlOptions` <a name="putSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions"></a>

```typescript
public putSamlOptions(value: ElasticsearchDomainSamlOptionsSamlOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticsearchDomainSamlOptionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSamlOptions` <a name="resetSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetSamlOptions"></a>

```typescript
public resetSamlOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference">ElasticsearchDomainSamlOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptionsInput">samlOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `samlOptions`<sup>Required</sup> <a name="samlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptions"></a>

```typescript
public readonly samlOptions: ElasticsearchDomainSamlOptionsSamlOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticsearchDomainSamlOptionsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference">ElasticsearchDomainSamlOptionsTimeoutsOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `samlOptionsInput`<sup>Optional</sup> <a name="samlOptionsInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptionsInput"></a>

```typescript
public readonly samlOptionsInput: ElasticsearchDomainSamlOptionsSamlOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ElasticsearchDomainSamlOptionsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a> | cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchDomainSamlOptionsConfig <a name="ElasticsearchDomainSamlOptionsConfig" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.Initializer"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

const elasticsearchDomainSamlOptionsConfig: elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `samlOptions`<sup>Optional</sup> <a name="samlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.samlOptions"></a>

```typescript
public readonly samlOptions: ElasticsearchDomainSamlOptionsSamlOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#saml_options ElasticsearchDomainSamlOptions#saml_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticsearchDomainSamlOptionsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#timeouts ElasticsearchDomainSamlOptions#timeouts}

---

### ElasticsearchDomainSamlOptionsSamlOptions <a name="ElasticsearchDomainSamlOptionsSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.Initializer"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

const elasticsearchDomainSamlOptionsSamlOptions: elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#enabled ElasticsearchDomainSamlOptions#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.idp">idp</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | idp block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterBackendRole">masterBackendRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterUserName">masterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_user_name ElasticsearchDomainSamlOptions#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.rolesKey">rolesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#roles_key ElasticsearchDomainSamlOptions#roles_key}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.subjectKey">subjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#subject_key ElasticsearchDomainSamlOptions#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#enabled ElasticsearchDomainSamlOptions#enabled}.

---

##### `idp`<sup>Optional</sup> <a name="idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.idp"></a>

```typescript
public readonly idp: ElasticsearchDomainSamlOptionsSamlOptionsIdp;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

idp block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#idp ElasticsearchDomainSamlOptions#idp}

---

##### `masterBackendRole`<sup>Optional</sup> <a name="masterBackendRole" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterBackendRole"></a>

```typescript
public readonly masterBackendRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}.

---

##### `masterUserName`<sup>Optional</sup> <a name="masterUserName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterUserName"></a>

```typescript
public readonly masterUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_user_name ElasticsearchDomainSamlOptions#master_user_name}.

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.rolesKey"></a>

```typescript
public readonly rolesKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#roles_key ElasticsearchDomainSamlOptions#roles_key}.

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}.

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.subjectKey"></a>

```typescript
public readonly subjectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#subject_key ElasticsearchDomainSamlOptions#subject_key}.

---

### ElasticsearchDomainSamlOptionsSamlOptionsIdp <a name="ElasticsearchDomainSamlOptionsSamlOptionsIdp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.Initializer"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

const elasticsearchDomainSamlOptionsSamlOptionsIdp: elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#entity_id ElasticsearchDomainSamlOptions#entity_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent">metadataContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#metadata_content ElasticsearchDomainSamlOptions#metadata_content}. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#entity_id ElasticsearchDomainSamlOptions#entity_id}.

---

##### `metadataContent`<sup>Required</sup> <a name="metadataContent" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent"></a>

```typescript
public readonly metadataContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#metadata_content ElasticsearchDomainSamlOptions#metadata_content}.

---

### ElasticsearchDomainSamlOptionsTimeouts <a name="ElasticsearchDomainSamlOptionsTimeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.Initializer"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

const elasticsearchDomainSamlOptionsTimeouts: elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#delete ElasticsearchDomainSamlOptions#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#update ElasticsearchDomainSamlOptions#update}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#delete ElasticsearchDomainSamlOptions#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#update ElasticsearchDomainSamlOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference <a name="ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

new elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">metadataContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent">metadataContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `metadataContentInput`<sup>Optional</sup> <a name="metadataContentInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```typescript
public readonly metadataContentInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `metadataContent`<sup>Required</sup> <a name="metadataContent" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```typescript
public readonly metadataContent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainSamlOptionsSamlOptionsIdp;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

---


### ElasticsearchDomainSamlOptionsSamlOptionsOutputReference <a name="ElasticsearchDomainSamlOptionsSamlOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

new elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp">putIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp">resetIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole">resetMasterBackendRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName">resetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">resetSessionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdp` <a name="putIdp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp"></a>

```typescript
public putIdp(value: ElasticsearchDomainSamlOptionsSamlOptionsIdp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIdp` <a name="resetIdp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp"></a>

```typescript
public resetIdp(): void
```

##### `resetMasterBackendRole` <a name="resetMasterBackendRole" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```typescript
public resetMasterBackendRole(): void
```

##### `resetMasterUserName` <a name="resetMasterUserName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```typescript
public resetMasterUserName(): void
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```typescript
public resetRolesKey(): void
```

##### `resetSessionTimeoutMinutes` <a name="resetSessionTimeoutMinutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```typescript
public resetSessionTimeoutMinutes(): void
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```typescript
public resetSubjectKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idp">idp</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput">idpInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">masterBackendRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput">masterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">sessionTimeoutMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole">masterBackendRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName">masterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey">rolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey">subjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idp`<sup>Required</sup> <a name="idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idp"></a>

```typescript
public readonly idp: ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpInput`<sup>Optional</sup> <a name="idpInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput"></a>

```typescript
public readonly idpInput: ElasticsearchDomainSamlOptionsSamlOptionsIdp;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `masterBackendRoleInput`<sup>Optional</sup> <a name="masterBackendRoleInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```typescript
public readonly masterBackendRoleInput: string;
```

- *Type:* string

---

##### `masterUserNameInput`<sup>Optional</sup> <a name="masterUserNameInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```typescript
public readonly masterUserNameInput: string;
```

- *Type:* string

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```typescript
public readonly rolesKeyInput: string;
```

- *Type:* string

---

##### `sessionTimeoutMinutesInput`<sup>Optional</sup> <a name="sessionTimeoutMinutesInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```typescript
public readonly sessionTimeoutMinutesInput: number;
```

- *Type:* number

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```typescript
public readonly subjectKeyInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterBackendRole`<sup>Required</sup> <a name="masterBackendRole" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```typescript
public readonly masterBackendRole: string;
```

- *Type:* string

---

##### `masterUserName`<sup>Required</sup> <a name="masterUserName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```typescript
public readonly masterUserName: string;
```

- *Type:* string

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```typescript
public readonly rolesKey: string;
```

- *Type:* string

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* number

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```typescript
public readonly subjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainSamlOptionsSamlOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

---


### ElasticsearchDomainSamlOptionsTimeoutsOutputReference <a name="ElasticsearchDomainSamlOptionsTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticsearchDomainSamlOptions } from '@cdktf/provider-aws'

new elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchDomainSamlOptionsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a> | cdktf.IResolvable

---



